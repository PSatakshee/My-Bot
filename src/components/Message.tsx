import { MessageType } from '../app/page'

type MessageProps = {
  message: MessageType
}

const Message = ({ message }: MessageProps) => {
  const isUser = message.role === 'user'
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-xs p-3 rounded-lg shadow 
        ${isUser ? 'bg-green-500 text-white rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none'}`}>
        {message.content}
      </div>
    </div>
  )
}

export default Message
