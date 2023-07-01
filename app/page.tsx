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
          <div className="font-semibold py-16 underline underline-offset-1">
            <h1>Category 1</h1>
          </div>
          <div className="flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
            <CardThree />
            <CardThree />
            <CardThree />
          </div>
          <div className="font-semibold py-16 underline underline-offset-1">
            <h1>Category 2</h1>
          </div>
          <div className="flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
            <CardThree />
            <CardThree />
            <CardThree />
          </div>
          <div className="font-semibold py-16 underline underline-offset-1">
            <h1>Category 3</h1>
          </div>
          <div className="flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
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
