import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function getProducts() {
    const response = await fetch("https://66a0f0557053166bcabd6c0a.mockapi.io/exam/v1/Dashboard")
    if(!response.ok) {
      throw new Error("Failed to fetch products")
    }
    return response.json()
  }
  
  interface IProducts {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    description: string;
    rate: number;
    price: number;
    size: string;
    color: string;
    __v: number;
  }

export default async function Product() {
  const product: IProducts[] = await getProducts()
  console.log(product)
  return (
    <div>
      <div className="grid grid-cols-4 m-3 gap-[35px] mt-7">
          {
            product.map((p) => (
              <Link key={p.id} href={`product/${p.id}`}>
                <div className="relative text-left w-[220px] max-md:flex-wrap h-[400]">
                    <button className="absolute w-[50px] h-[50px] ml-[210px] mt-[30px] bg-rose-400 text-white rounded-full">-30%</button>
                    <Image className='max-md:flex-wrap' width={285} height={300} src={p.image} alt={p.subtitle} />
                    <div className="w-[285px] h-auto p-5 bg-gray-100">
                      <h2 className="text-1xl text-black font-semibold uppercase sm:text-3xl my-2">{p.title}</h2>
                      <h3 className="text-base font-medium text-gray-300 sm:text-2xl">{p.subtitle}</h3>
                      <p className="text-xl font-semibold my-2 sm:text-2xl">Rp {p.price}</p>
                    </div>
                </div>
              </Link>
            ))
          }
        </div>
    </div>
  )
}
