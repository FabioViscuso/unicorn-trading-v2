import React, { useEffect, useRef } from "react";
import { ChartComponent } from "../components/dashboard/ChartComponent";
import { useLogin } from "../utils/useLogin";
import { useUserData } from "../utils/useUserData"

export function Dashboard() {
    const { currUser } = useLogin();
    const { currentOptions, addToFollowed, resetFollowed } = useUserData();

    const exchangeInputRef = useRef<HTMLInputElement>(null)
    const optionInputRef = useRef<HTMLInputElement>(null)

    function addStockOptionHandler(event: React.FormEvent) {
        event.preventDefault();
        const exchange = exchangeInputRef.current?.value;
        const option = optionInputRef.current?.value;
        const fullOption = `${exchange}:${option}`;
        addToFollowed(fullOption);

        exchangeInputRef.current!.value = '';
        optionInputRef.current!.value = '';
    }

    /* useEffect(() => {
        const syncStorage = () => {
            let localFollowed = JSON.parse(localStorage.getItem('followed') as string);
            if (localFollowed) {
                addToFollowed(localFollowed)
            } else {
                resetFollowed();
            }
        }
        syncStorage()
    }) */

    return (

        <div className="xs:pt-24 md:pt-0 xs:pl-0 md:pl-56 w-full flex flex-col gap-y-10 ">
            <h1 className="hero-fluid-text text-center xs:mx-auto font-josefin py-7 font-bold text-transparent
                bg-clip-text bg-gradient-to-br from-[#777] via-[#000] to-[#777]
                ">Welcome back, <span className=" font-bold font-josefin text-3xl md:text-6xl text-center  bg-clip-text text-transparent bg-gradient-to-br from-[#ff8cc6] via-[#ffffff] to-[#15c4ff] drop-shadow-[0px_0px_2px_rgb(0,0,0)]">{currUser.username}</span></h1>
            <form onSubmit={addStockOptionHandler} className="w-max mx-auto flex flex-col justify-center items-center">
                <h3 className="text-xl pb-4 capitalize font-bold">Add a new stock option to track</h3>
                <div className="flex justify-center items-center ">
                    <input
                        ref={exchangeInputRef}
                        className="text-2xl pl-4 py-1 uppercase rounded"
                        placeholder='Eg: NASDAQ'
                    />
                    <span className="text-4xl mx-4 font-bold">:</span>
                    <input
                        ref={optionInputRef}
                        className="text-2xl pl-4 uppercase py-1 rounded"
                        placeholder='Eg: AAPL'
                    />
                    <button type="submit" className="neumButton px-10 py-2 ml-2">Add</button>
                </div>
            </form>
            {currentOptions.length > 0 && <div className="w-full flex flex-col items-center gap-y-10">
                {currentOptions.map((item, index) => (
                    < ChartComponent key={index} index={index} passedSymbol={item} />
                ))}
            </div>}

        </div >

    )
}
