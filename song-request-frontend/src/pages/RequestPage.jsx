import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { songs } from '../mock/songs';
import axios from 'axios';

export default function RequestPage() {
  const { songId } = useParams();
  const navigate = useNavigate();
  const song = songs.find(s => s.id === songId);
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:8080/api/songs/request', {
        songId: song.id,
        message,
      });
      navigate('/confirmation');
    } catch (err) {
      alert('Error submitting request');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{song?.title}</h2>
      <textarea
        placeholder="Add a message (optional)"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border p-2 rounded h-32 mb-4"
      />
      <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded">
        Submit Request
      </button>
    </div>
  );
}
