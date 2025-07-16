import { useNavigate } from 'react-router-dom';
import { songs } from '../mock/songs';

export default function SearchPage() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Search songs</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search songs"
          className="w-full border rounded p-2"
        />
      </div>
      <div className="space-y-4">
        {songs.map(song => (
          <div
            key={song.id}
            className="p-4 border rounded cursor-pointer hover:bg-gray-100"
            onClick={() => navigate(`/request/${song.id}`)}
          >
            <p className="font-semibold">{song.title}</p>
            <p className="text-sm text-gray-500">{song.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
