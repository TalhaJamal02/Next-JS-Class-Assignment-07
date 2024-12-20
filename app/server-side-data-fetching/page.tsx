import GoBackBtn from '@/components/GoBackBtn'
import { BookOpen } from 'lucide-react';
import React from 'react'

interface Book {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

async function ServerPage() {

  const res = await fetch('https://simple-books-api.glitch.me/books/')

  const parsedData: Book[] = await res.json()

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <GoBackBtn />
      <div>
        <h1 className="text-3xl font-bold my-8 text-center text-gray-800">
          Server-Side Data Fetching
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
        {parsedData.map((book, index) => (
          <div
            key={book.id}
            className="w-full max-w-xs bg-gray-100 shadow-md p-6 space-y-3 relative overflow-hidden hover:shadow-xl transition-all duration-300 rounded-lg"
          >
            <div className="w-20 h-20 bg-black rounded-full absolute top-7 right-7 transform translate-x-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden gap-3">
              <p className="text-white text-2xl">
                {String(index + 1).padStart(2, "0")}
              </p>
            </div>
            <div className="text-gray-500 w-12">
              <BookOpen className="w-12 h-16" />
            </div>
            <h1 className="font-bold text-xl">{book.name}</h1>
            <p className="text-zinc-500 leading-6">{book.type}</p>
            <p
              className={`font-medium ${book.available ? "text-green-600" : "text-red-600"
                }`}
            >
              {book.available ? "Available" : "Unavailable"}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServerPage