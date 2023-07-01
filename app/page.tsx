'use client'

import React from 'react'
import Navbar from './utlis/navabar'
import Hero from './components/hero'
import CardThree from './components/cards'
import FooterBar from './utlis/footer'

export default function Index() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex justify-center items-center ">
        <div>
          <div className="font-semibold py-16 underline underline-offset-1 px-3">
            <h1>Category 1</h1>
          </div>
          <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
            <CardThree />
            <CardThree />
            <CardThree />
            <CardThree />
          </div>
          <div className="font-semibold py-16 underline underline-offset-1 px-3">
            <h1>Category 2</h1>
          </div>
          <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
            <CardThree />
            <CardThree />
            <CardThree />
            <CardThree />
          </div>
          <div className="font-semibold py-16 underline underline-offset-1 px-3">
            <h1>Category 3</h1>
          </div>
          <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
            <CardThree />
            <CardThree />
            <CardThree />
            <CardThree />
          </div>
        </div>
      </div>
      <FooterBar />
    </>
  )
}
