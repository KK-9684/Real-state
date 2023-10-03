import { GMap } from "apple/components/google-map"
import React from "react"

export default function Deals() {

  const isMarkerShown = true;
  
  return (
    <>
      <div className="flex flex-col items-center p-5">
          <form className="border-[1px] border-gray-200 shadow-xl px-10 py-5 w-[600px]">
              <div className="text-2xl flex justify-center"><span>SUBMIT BUYBOX</span></div>
              <div className="my-2">
                  <span>Name </span><span className="text-red-500">*</span>
              </div>
              <div className="mb-2">
                  <input type="text" className="general-input" placeholder="John" required></input>
              </div>
              <div className="my-2">
                  <span>Email </span><span className="text-red-500">*</span>
              </div>
              <div className="mb-2">
                  <input type="email" className="general-input" placeholder="john.doe@company.com" required></input>
              </div>
              <div className="my-2">
                  <span>Phone number </span><span className="text-red-500">*</span>
              </div>
              <div className="mb-2">
                  <input type="tel" className="general-input" placeholder="0-000-000-0000" required></input>
              </div>
              <div className="my-2">
                <span>What kind of real estate interests you? </span><span className="text-red-500">*</span>
                <div>
                  <input type="checkbox" value="" className="check-box"></input>
                  <label className="check-box-label">Single family</label>
                </div>
                <div>
                  <input type="checkbox" value="" className="check-box"></input>
                  <label className="check-box-label">Multi family</label>
                </div>
                <div>
                  <input type="checkbox" value="" className="check-box"></input>
                  <label className="check-box-label">Commerical</label>
                </div>
                <div>
                  <input type="checkbox" value="" className="check-box"></input>
                  <label className="check-box-label">Land</label>
                </div>
              </div>
              <div className="mb-2">
                <span>What is your exit strategy? </span><span className="text-red-500">*</span>
                <div>
                  <input type="checkbox" value="" className="check-box"></input>
                  <label className="check-box-label">Buy and Hold</label>
                </div>
                <div>
                  <input type="checkbox" value="" className="check-box"></input>
                  <label className="check-box-label">Fix and Flip</label>
                </div>
                <div>
                  <input type="checkbox" value="" className="check-box"></input>
                  <label className="check-box-label">Wholesale</label>
                </div>
              </div>
              <div className="my-2">
                  <span>What markets are you interested in? </span><span className="text-red-500">*</span>
              </div>
              <div className="mb-2">
                  <input type="text" className="general-input" placeholder="" required></input>
              </div>
              <div className="my-2">
                  <span>What kinds of returns are you looking to make? </span><span className="text-red-500">*</span>
              </div>
              <div className="mb-2">
                  <input type="text" className="general-input" placeholder="" required></input>
              </div>
              <div className="my-2">
                  <span>Anything else we should know? </span>
              </div>
              <div className="mb-2">
                  <input type="text" className="general-input" placeholder="" required></input>
              </div>
              <div className="my-2">
                  <span>Select a Location of your interest with the map below.</span>
              </div>
              <div className="mb-2">
                  <input type="text" className="general-input" placeholder="" required></input>
              </div>
              <GMap />
              <div className="my-4 flex justify-end">
                  <button type="submit" className="submit-btn">Submit</button>
              </div>
          </form>
      </div>
    </>
  )
}