import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const generateScript = async () => {
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input }),
    });
    const data = await res.json();
    setResult(data.output);
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h1>AI Chat Generator</h1>
      <textarea
        rows="5"
        style={{ width: '100%', padding: 10 }}
        placeholder="Describe your product or niche..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={generateScript} style={{ marginTop: 10, padding: 10, backgroundColor: '#0070f3', color: 'white' }}>
        Generate Script
      </button>
      {result && (
        <div style={{ marginTop: 20, padding: 10, backgroundColor: '#f0f0f0' }}>
          <h3>Your Script:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}