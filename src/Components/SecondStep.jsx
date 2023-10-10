import React from 'react'
import avt from "../Asset/author_freeman.webp"

export default function SecondStep() {
  return (
    <div className="container mx-auto w-full flex flex-col items-center justify-center text-center my-[6rem] gap-3">
        <h2 className="text-3xl font-bold text-gray-600 my-6">Are you currently paying on your debt?</h2>
        <button className="border border-slate-900 p-1 w-[15%] rounded hover:bg-gray-200 transition-all font-semibold">Yes</button>
        <button className="border border-slate-900 p-1 w-[15%] rounded hover:bg-gray-200 transition-all font-semibold">SOMETIMES</button>
        <button className="border border-slate-900 p-1 w-[15%] rounded hover:bg-gray-200 transition-all font-semibold">NO</button>

        <div className="w-full flex items-start justify-center my-7">
            <img src={avt} className="rounded-full h-[50px]" />
            <div className="p-3 bg-white border bg-gray-300 font-semibold rounded w-[30%] mx-3 text-left">
              This helps us determine how much you should take on in your action plan.
            </div>
          </div>
    </div>
  )
}
