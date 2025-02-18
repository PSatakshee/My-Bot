import { MessageType } from '../app/page'
import Message from './Message'

type ChatWindowProps = {
  messages: MessageType[]
}

const ChatWindow = ({ messages }: ChatWindowProps) => {
  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  )
}

export default ChatWindow
