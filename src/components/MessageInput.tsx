import { useState, FormEvent } from 'react'

type MessageInputProps = {
  onSend: (text: string) => void
}

const MessageInput = ({ onSend }: MessageInputProps) => {
  const [input, setInput] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (input.trim() === '') return
    onSend(input)
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <input
        type="text"
        className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="bg-green-500 text-white rounded-full px-4 py-2">
        Send
      </button>
    </form>
  )
}

export default MessageInput
