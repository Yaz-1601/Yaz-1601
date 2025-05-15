import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  const { input } = req.body;

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You generate cold DMs and affiliate sales conversations that convert leads.' },
      { role: 'user', content: `Generate a cold DM and follow-up sequence for: ${input}` },
    ],
  });

  res.status(200).json({ output: response.choices[0].message.content });
}