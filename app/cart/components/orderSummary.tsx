import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
export default function OrderSummary() {
  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
    >
      <h2
        id="summary-heading"
        className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
      >
        Price Details
      </h2>
      <div>
        <dl className=" space-y-1 px-2 py-4">
          <div className="flex items-center justify-between">
            <dt className="text-sm text-gray-800">Price (3 item)</dt>
            <dd className="text-sm font-medium text-gray-900">₹ 52,398</dd>
          </div>
          <div className="flex items-center justify-between pt-4">
            <dt className="flex items-center text-sm text-gray-800">
              <span>Discount</span>
            </dt>
            <dd className="text-sm font-medium text-green-700">- ₹ 3,431</dd>
          </div>
          <div className="flex items-center justify-between py-4">
            <dt className="flex text-sm text-gray-800">
              <span>Delivery Charges</span>
            </dt>
            <dd className="text-sm font-medium text-green-700">Free</dd>
          </div>
          <div className="flex items-center justify-between border-y border-dashed py-4 ">
            <dt className="text-base font-medium text-gray-900">
              Total Amount
            </dt>
            <dd className="text-base font-medium text-gray-900">₹ 48,967</dd>
          </div>
        </dl>
        <div className="px-2 pb-4 font-medium text-green-700">
          You will save ₹ 3,431 on this order
        </div>
        <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Place Order
        </button>
      </div>
    </section>
  )
}
