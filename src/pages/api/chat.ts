import type { NextApiRequest, NextApiResponse } from 'next'
import { HfInference } from "@huggingface/inference"

type Message = {
  role: 'user' | 'assistant'
  content: string
}

type Data = {
  output?: string
  error?: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }
  
  const { messages } = req.body
  if (!messages || !Array.isArray(messages)) {
    res.status(400).json({ error: 'Invalid or missing messages array' })
    return
  }
  
  try {
    const hf = new HfInference(process.env.HF_API_KEY)
    
    const chatCompletion = await hf.chatCompletion({
      model: "meta-llama/Llama-3.3-70B-Instruct",
      messages: messages,
      provider: "together",
      max_tokens: 500,
      temperature: 0.7
    })
    
    if (!chatCompletion || !chatCompletion.choices || chatCompletion.choices.length === 0) {
      res.status(500).json({ error: 'No response from the model' })
      return
    }
    
    const output = chatCompletion.choices[0].message.content
    
    res.status(200).json({ output: output })
  } catch (error: any) {
    console.error('Error:', error)
    res.status(500).json({ error: error.message || 'An unexpected error occurred' })
  }
}
