import React, { useEffect, useRef, useState } from "react";
import { ChartComponent } from "../components/dashboard/ChartComponent";
import { useLogin } from "../utils/useLogin";

export function Dashboard() {
    const { currUser } = useLogin();
    const [savedOptions, setSavedOptions] = useState<string[]>(syncState());

    const exchangeInputRef = useRef<HTMLInputElement>(null)
    const optionInputRef = useRef<HTMLInputElement>(null)

    function syncState() {
        const init: string[] = JSON.parse(localStorage.getItem(`followedBy${currUser.username}`) as string)
        if (init && init.length > 0) {
            console.log(init)
            return init
        } else {
            return []
        }
    }

    function addToFollowed(newOption: string) {
        setSavedOptions((item) => [...item, newOption])
    };

    function addStockOptionHandler(event: React.FormEvent) {
        event.preventDefault();
        const exchange = exchangeInputRef.current?.value.toUpperCase();
        const option = optionInputRef.current?.value.toUpperCase();
        const fullOption = `${exchange}:${option}`;
        console.log(exchange)
        if (exchange!.length > 2 && option!.length > 2) {
            addToFollowed(fullOption)
        } else {
            window.alert('Ops! Don\'t leave fields empty and use at least 3 characters')
        }
        exchangeInputRef.current!.value = '';
        optionInputRef.current!.value = '';
    }

    useEffect(() => {
        localStorage.setItem(`followedBy${currUser.username}`, JSON.stringify(savedOptions))
    }, [currUser.username, savedOptions])

    return (

        <div className="py-24 xs:pl-0 md:pl-56 w-full flex flex-col gap-10 ">
            <h1 className="hero-fluid-text text-center xs:mx-auto font-josefin font-bold text-transparent
                bg-clip-text bg-gradient-to-br from-[#777] via-[#000] to-[#777]">Welcome back, <span className=" font-bold font-josefin text-3xl md:text-6xl text-center  bg-clip-text text-transparent bg-gradient-to-br from-[#ff8cc6] via-[#ffffff] to-[#15c4ff] drop-shadow-[0px_0px_2px_rgb(0,0,0)]">{currUser.username}</span></h1>
            <form onSubmit={addStockOptionHandler} className="w-max mx-auto flex flex-col justify-center items-center">
                <h3 className="text-xl pb-4 capitalize font-bold">Add a new stock option to track</h3>
                <div className="flex justify-center items-center ">
                    <input
                        ref={exchangeInputRef}
                        className="text-2xl pl-4 py-1 uppercase rounded"
                        placeholder='Eg: NASDAQ'
                        autoFocus
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
            {savedOptions.length > 0 && <div className="w-full md:w-8/12 mx-auto flex flex-col items-center gap-y-10">
                {savedOptions.map((item: string, index: number) => (
                    <ChartComponent key={index} index={index} passedSymbol={item} />
                ))}
            </div>}

        </div >

    )
}
