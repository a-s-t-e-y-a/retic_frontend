'use client'
import React, { useEffect, useState } from 'react'
import product from '../utils/data'
import { Heart, Trash } from 'lucide-react'
interface Product {
  id: number
  name: string
  href: string
  price: string
  originalPrice: string
  discount: string
  color: string
  size: string
  leadTime?: string
  imageSrc: string
}

export default function OrderShowCase(products: any) {
  let [quant, setQuant] = useState(1)
  let [sub, setSub] = useState(1)

  function upgrade() {
    setQuant((prevQuant) => prevQuant + 1)
  }

  function degrade() {
    setQuant((prevSub) => (prevSub === 1 ? prevSub : prevSub - 1))
  }
  return (
    <div key={products.products.id} className="">
      <li className="flex py-6 sm:py-6 ">
        <div className="flex-shrink-0">
          <img
            src={products.products.imageSrc}
            alt={products.products.name}
            className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
          <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
            <div>
              <div className="flex justify-between">
                <h3 className="text-sm">
                  <a
                    href={products.products.href}
                    className="font-semibold text-black"
                  >
                    {products.products.name}
                  </a>
                </h3>
              </div>
              <div className="mt-1 flex text-sm">
                <p className="text-sm text-gray-500">
                  {products.products.color}
                </p>
                {products.products.size ? (
                  <p className="ml-4 border-l border-gray-200 pl-4 text-sm text-gray-500">
                    {products.products.size}
                  </p>
                ) : null}
              </div>
              <div className="mt-1 flex items-end">
                <p className="text-xs font-medium text-gray-500 line-through">
                  {products.products.originalPrice}
                </p>
                <p className="text-sm font-medium text-gray-900">
                  &nbsp;&nbsp;{products.products.price}
                </p>
                &nbsp;&nbsp;
                <p className="text-sm font-medium text-green-500">
                  {products.products.discount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
      <div className="mb-2 flex">
        <div className="min-w-24 flex">
          <button onClick={degrade} type="button" className="h-7 w-7">
            -
          </button>
          <input
            type="text"
            className="mx-1 h-7 w-9 rounded-md border text-center"
            defaultValue={quant}
          />
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center"
            onClick={upgrade}
          >
            +
          </button>
        </div>
        <div className="ml-6 flex text-sm">
          <button
            type="button"
            className="flex items-center space-x-1 px-2 py-1 pl-0"
          >
            <Trash size={12} className="text-red-500" />
            <span className="text-xs font-medium text-red-500">Remove</span>
          </button>
        </div>
      </div>
    </div>
  )
}
