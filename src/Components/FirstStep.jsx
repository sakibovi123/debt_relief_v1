import React from 'react'
import avt from "../Asset/author_freeman.webp"
import '../App.css';

export default function FirstStep() {

    function handleRangeChange(event) {
        // Get the current value of the range input
        const currentValue = event.target.value;
    
        // Update the content of the <p> tag with the current value
        const pTag = document.getElementById('rangeValue');
        pTag.textContent = `$` + `${currentValue}`;
    }
      
  return (
    
      <div className="container md:mx-auto w-full flex flex-col items-center justify-center text-center my-[6rem]">
          <div className="w-full">
            <h2 className="text-3xl font-bold">Are you Eligible for Debt Relief in New York?</h2>
          </div>
          <div className="w-full flex items-center justify-center my-7">
            <p className="text-lg w-[50%]">
              Answer 3 quick qustions and I will give you a a step-by-step action plan showing you exactly what you need to get rid of your debt
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center my-7">
            <p id="rangeValue" className="text-2xl font-bold text-slate-800">$100</p>
            <input
                type="range"
                max={7000}
                min={100}
                className="w-[40%] p-2 rounded"
                onChange={(event) => handleRangeChange(event)}
                />

            <button className="p-2 border mx-3 w-[10%] hover:bg-slate-900 hover:text-white transition-all hover:rounded">Next</button>
          </div>

          <div className="w-full flex items-start justify-center my-7">
            <img src={avt} className="rounded-full h-[50px]" />
            <div className="p-3 bg-white border rounded font-semibold bg-gray-300 w-[30%] mx-3 text-left">
              We analyze your current debt position to see how we can help you the best
            </div>
          </div>
      </div>
    
  )
}
