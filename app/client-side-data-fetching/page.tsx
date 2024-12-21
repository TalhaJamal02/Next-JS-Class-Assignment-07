"use client";

import { useState, useEffect } from 'react'
import GoBackBtn from '@/components/GoBackBtn'
import Image from 'next/image';
import { Star } from 'lucide-react';
import { BarLoader } from 'react-spinners';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}

function ClientPage() {

  const [data, setData] = useState<Product[]>([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      const parsedData = await response.json();
      setData(parsedData);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <GoBackBtn />
      <div>
        <h1 className="text-3xl font-bold my-8 text-center text-gray-800">
          Client-Side Data Fetching
        </h1>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-[50vh]">
          <BarLoader color="#4F46E5" loading={loading} height={4} width={150} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-500"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={500}
                height={500}
                className="w-full h-48 object-contain mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-sm text-gray-600 mb-2">
                <strong className="text-gray-700">Category:</strong> {product.category}
              </p>
              <span className="flex items-center justify-between w-full">
                <p className="text-lg font-bold text-gray-800 mb-1">${product.price}</p>
                <span className="flex items-center gap-2 text-gray-600">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <p>{product.rating.rate}</p>
                  <p className="text-gray-400">({product.rating.count})</p>
                </span>
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ClientPage