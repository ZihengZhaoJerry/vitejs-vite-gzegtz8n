import { useState } from 'react';

export default function SongRequestForm() {
  const [songName, setSongName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Song: ${songName}\nMessage: ${message}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '10px' }}>
        <label>Song Name:</label><br />
        <input
          type="text"
          value={songName}
          onChange={(e) => setSongName(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
          required
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Message (optional):</label><br />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
      <button type="submit" style={{ padding: '10px 15px' }}>
        Submit
      </button>
    </form>
  );
}
