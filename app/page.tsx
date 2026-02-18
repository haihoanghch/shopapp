"use client"
import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

export default function Home() {
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    fetchProducts()
  }, [])

  async function fetchProducts() {
    const { data } = await supabase.from("products").select("*")
    setProducts(data || [])
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-black text-white p-4 text-center text-2xl font-bold">
        Shop Online
      </header>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-5"
          >
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-bold text-green-600">
              {product.price} VND
            </p>
            <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
              Thêm vào giỏ
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
