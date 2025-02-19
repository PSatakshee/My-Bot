# MyBot: Next.js AI Chatbot

## Description

MyBot is an AI-powered chatbot built with Next.js, TypeScript, and Tailwind CSS. It leverages the Hugging Face Inference API to provide intelligent responses using the Meta Llama 3.3 70B Instruct model. This project demonstrates how to create a modern, responsive chat interface with AI capabilities.

## Features

- Real-time chat interface
- AI-powered responses using Hugging Face's Inference API
- Responsive design with Tailwind CSS
- TypeScript for enhanced code quality and developer experience

## Tech Stack

- Next.js 15.1.7
- TypeScript
- Tailwind CSS
- Hugging Face Inference API (@huggingface/inference)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm (v6 or later)
- A Hugging Face account and API key

## Installation

1. Clone the repository:
   git clone https://github.com/PSatakshee/My-Bot.git
   cd my-bot
2. Install dependencies:
   npm install
3. Create a `.env.local` file in the root directory and add your Hugging Face API key
4. To run the development server: npm run dev


## Configuration

- `next.config.js`: Next.js configuration
- `tailwind.config.js`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration

## API Routes

- `/api/chat`: Handles chat requests to the Hugging Face Inference API

## Components

- `ChatWindow`: Displays the chat messages
- `Message`: Renders individual chat messages
- `MessageInput`: Handles user input for sending messages

## Deployment

This project is ready to be deployed on Vercel. Simply connect your GitHub repository to Vercel and it will automatically deploy your application.

## Contributing

Contributions to MyBot are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Hugging Face](https://huggingface.co/)




