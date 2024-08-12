# Markdown Summarizer

This is a [Next.js](https://nextjs.org/) project that summarizes Markdown documents. Upload your .md file, and the application will generate a concise summary using AI.

## Getting Started

To run this project on your local system, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/Ipriyankrajai/md-summary.git
   cd md-summary
   ```

2. Copy the environment file and add your OpenAI API key:

   ```bash
   cp .env.example .env
   ```

   Open the `.env` file and add your OpenAI API key:

   ```
   OPENAI_API_KEY=your_api_key_here
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Run the development server:
   ```bash
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
