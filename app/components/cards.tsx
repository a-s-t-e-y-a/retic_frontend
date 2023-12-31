import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useRouter } from 'next/navigation' // Fixed import statement

const ButtonComponent = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/product/') // Route to the 'TargetComponent'
  }

  return (
    <>
      <div className="rounded-md border">
        <img
          src="https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Laptop"
          className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
        />
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            Taylor Swift concert
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            Experience the exhilarating Taylor Swift concert in New York,
            showcasing her chart-topping hits and captivating stage presence.
          </p>
          <div className="mt-4">
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              #Taylor
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              #Swift
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              #Concert
            </span>
          </div>
          <div className="mt-3 flex items-center space-x-2">
            <span className="block text-sm font-semibold">Ticket Type : </span>
            <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-silver-800"></span>
            <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"></span>
            <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span>
          </div>
          {/* <div className="mt-5 flex items-center space-x-2">
                                <span className="block text-sm font-semibold">Size : </span>
                                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                                    8 UK
                                </span>
                                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                                    9 UK
                                </span>
                                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                                    10 UK
                                </span>
                            </div> */}
          <button
            type="button"
            className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  )
}

export default function CardThree() {
  return (
    <ButtonComponent /> // Render the ButtonComponent
  )
}
