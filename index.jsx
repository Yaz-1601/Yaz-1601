import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleGenerate = async () => {
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input })
    });
    const data = await res.json();
    setResponse(data.result);
  };

  return (
    <div style={{ padding: 20 }}>
      <Head><title>AI Chat Generator</title></Head>
      <h1>AI Chat Generator</h1>
      <textarea rows="4" cols="50" onChange={e => setInput(e.target.value)} value={input} />
      <br /><br />
      <button onClick={handleGenerate}>Generate</button>
      <p><strong>Response:</strong> {response}</p>
    </div>
  );
}