// File: src/app/page.tsx

'use client';

import { useState } from 'react'
import ChatWindow from '../components/ChatWindow'
import MessageInput from '../components/MessageInput'

export type MessageType = {
  id: number;
  role: 'user' | 'assistant';
  content: string;
}

export default function Home() {
  const [messages, setMessages] = useState<MessageType[]>([])

  const addMessage = (message: MessageType) => {
    setMessages((prev) => [...prev, message])
  }

  const handleSend = async (text: string) => {
    const userMessage: MessageType = { id: Date.now(), role: 'user', content: text }
    addMessage(userMessage)

    const conversationHistory = messages.concat(userMessage).map(msg => ({
      role: msg.role,
      content: msg.content
    }))

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: conversationHistory })
      })
      const data = await res.json()
      if (data.error) {
        console.error('Error:', data.error)
        addMessage({ id: Date.now(), role: 'assistant', content: 'Sorry, an error occurred. Please try again.' })
      } else {
        const assistantMessage: MessageType = { id: Date.now() + 1, role: 'assistant', content: data.output }
        addMessage(assistantMessage)
      }
    } catch (error) {
      console.error('Error:', error)
      addMessage({ id: Date.now(), role: 'assistant', content: 'Sorry, an error occurred. Please try again.' })
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col" id="bot-screen">
      <header className="bg-green-500 text-white p-4 text-center text-xl font-bold">
        My Bot
      </header>
      <main className="flex-1 overflow-auto p-4">
        <ChatWindow messages={messages} />
      </main>
      <footer className="fixed bottom-0 left-0 right-0 p-4 bg-white" id="footer">
        <MessageInput onSend={handleSend} />
      </footer>
    </div>
  )
}
