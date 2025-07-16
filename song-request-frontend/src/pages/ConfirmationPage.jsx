export default function ConfirmationPage() {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <div className="text-green-600 text-5xl mb-4">✔</div>
        <h2 className="text-2xl font-bold mb-2">Your song is in the queue!</h2>
        <p className="mb-6 text-gray-500">You're #3 in line</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded">Follow Performer</button>
      </div>
    );
  }
  