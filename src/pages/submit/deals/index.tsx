import React from "react"
import { InputDate } from "apple/components/input-date"

export default function Deals() {

    const [cPrice, setCPrice] = React.useState('')
    
    const [aPrice, setAPrice] = React.useState('')
    
    React.useEffect(() => {
        console.log('1. ' + cPrice);
        console.log('2. ' + aPrice);
    }, [cPrice, aPrice])

    return (
      <>
        <div className="flex flex-col items-center p-5">
            <form className="border-[1px] border-gray-200 shadow-xl px-10 py-5 w-[600px]">
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
                    <span>Property address </span><span className="text-red-500">*</span>
                </div>
                <div className="mb-2">
                    <input type="text" className="general-input" placeholder="" required></input>
                </div>
                <div className="my-2">
                    <span>Contract Price </span><span className="text-red-500">*</span>
                </div>
                <div className="mb-2">
                    <input type="number" className="general-input" placeholder="" step="0.01" required></input>
                </div>
                <div className="my-2">
                    <span>Asking Price</span><span className="text-red-500">*</span>
                </div>
                <div className="mb-2">
                    <input type="number" className="general-input" placeholder="" step="0.01" required></input>
                </div>
                <div className="my-2">
                    <span>Inspection Expiration </span><span className="text-red-500">*</span>
                </div>
                <div className="my-2">
                    <InputDate changeDate={setCPrice} />        
                </div>
                <div className="my-2">
                    <span>Closing date </span><span className="text-red-500">*</span>
                </div>
                <div className="my-2">
                    <InputDate changeDate={setAPrice} />
                </div>
                <div className="my-2">
                    <span>Link Photos / Description </span><span className="text-red-500">*</span>
                </div>
                <div className="my-2">
                    <textarea rows={4} className="text-area" placeholder="Descrition..."></textarea>
                </div>
                <div className="my-4 flex justify-end">
                    <button type="submit" className="submit-btn">Submit</button>
                </div>
            </form>
        </div>
      </>
    )
}