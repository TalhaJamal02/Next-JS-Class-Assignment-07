import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-500 to-gray-700 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <div>
          <h1 className="text-3xl font-semibold mb-3">Data Fetching</h1>
          <p className="text-gray-500 mb-6">Navigate to client or server side through below</p>
          <div className="flex gap-10 items-center justify-center">
            <Link href="/client-side-data-fetching">
              <button className="bg-gradient-to-br from-gray-400 to-gray-600 text-white px-4 py-2 rounded-md  transition-colors">
                Client-Side
              </button>
            </Link>
            <Link href="/server-side-data-fetching">
              <button className="bg-gradient-to-br from-gray-400 to-gray-600 text-white px-4 py-2 rounded-md  transition-colors">
                Server-Side
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
