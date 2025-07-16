import { useNavigate } from 'react-router-dom';

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">🎤 StreetStage</h1>
      <p className="mb-6">Request a song, leave a message, and enjoy the moment</p>
      <button
        className="bg-blue-600 text-white px-6 py-3 rounded"
        onClick={() => navigate('/search')}
      >
        Start Requesting
      </button>
    </div>
  );
}
