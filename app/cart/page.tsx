'use client'
import { Heart, Trash } from 'lucide-react'
import React from 'react'
import FooterBar from '../utlis/footer'
import Navbar from '../utlis/navabar'
import OrderSummary from './components/orderSummary'
import OrderShowCase from './components/orderShowCase'
import product from './utils/data'

export default function Cart() {
  return (
    <div className="mx-auto max-w-7xl px-2 lg:px-0">
      <Navbar />
      <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>

        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section
            aria-labelledby="cart-heading"
            className="rounded-lg bg-white lg:col-span-8"
          >
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>
            <ul role="list" className="divide-y divide-gray-200">
              {product.map((prod, productIdx) => (
                <OrderShowCase products={prod} key={productIdx} />
              ))}
            </ul>
          </section>
          {/* Order summary */}
          <OrderSummary />
        </form>
      </div>
      <FooterBar />
    </div>
  )
}
