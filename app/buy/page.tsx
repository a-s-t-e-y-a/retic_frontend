import React from 'react'
import Navbar from '../utlis/navabar'
import FooterBar from '../utlis/footer'
import Showcase from './components/showcase'

export default function ProductThree() {
  return (
    <>
      <Navbar />
      <h1 className="font-bold mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-1 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        Category 1
      </h1>
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Showcase />
        ))}
      </div>

      <h1 className="font-bold mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-1 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        Category 2
      </h1>
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Showcase />
        ))}
      </div>
      <h1 className="font-bold mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-1 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        Category 2
      </h1>
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Showcase />
        ))}
      </div>
      <FooterBar />
    </>
  )
}
