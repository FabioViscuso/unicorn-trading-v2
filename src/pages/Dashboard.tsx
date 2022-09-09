import React, { useEffect, useRef, useState } from "react";
import { ChartComponent } from "../components/dashboard/ChartComponent";
import { useLogin } from "../utils/useLogin";

export function Dashboard() {
    // this exposes che currUser object, useful to write a unique localStorage item key
    // and making a dynamic header that greets the user
    const { currUser } = useLogin();

    // savedOptions is an array of string initialized by the syncState function
    const [savedOptions, setSavedOptions] = useState<string[]>(syncState());

    // syncState checks the localStorage and, if there is content, will initialize the state with it
    // otherwise it will inizialite the state with an empty array
    function syncState() {
        const init: string[] = JSON.parse(localStorage.getItem(`followedBy${currUser.username}`) as string)
        if (init && init.length > 0) {
            console.log(init)
            return init
        } else {
            return []
        }
    }

    /* the add new option form is uncontrolled, so we use refs */
    const exchangeInputRef = useRef<HTMLInputElement>(null)
    const optionInputRef = useRef<HTMLInputElement>(null)

    // uses array spread to update the savedOptions state array
    function addItemHandler(newOption: string) {
        setSavedOptions((item) => [...item, newOption])
    };
    // eliminates the selected item (selected by the position in the array of mapped elements)
    // by filtering the savedOption array
    const deleteItemHandler = (optionToRemove: number) => {
        setSavedOptions(savedOptions.filter((item, index) => index !== optionToRemove))
    }

    // the function that's triggered on submission of the new stock option form
    // takes the value of the inputs, makes them uppercase, and checks them to be non-empty
    // if it's ok, it will call the addItemHandler and resets the form
    function addStockOptionHandler(event: React.FormEvent) {
        event.preventDefault();
        const exchange = exchangeInputRef.current?.value.toUpperCase();
        const option = optionInputRef.current?.value.toUpperCase();
        const fullOption = `${exchange}:${option}`;
        console.log(exchange)
        if (exchange!.length > 2 && option!.length > 2) {
            addItemHandler(fullOption)
        } else {
            window.alert('Ops! Don\'t leave fields empty and use at least 3 characters')
        }
        exchangeInputRef.current!.value = '';
        optionInputRef.current!.value = '';
    }

    // this will "listen" for any changes in the savedOptions state array
    // if that array is modified, it will write its new content in the localStorage
    useEffect(() => {
        localStorage.setItem(`followedBy${currUser.username}`, JSON.stringify(savedOptions))
    }, [currUser.username, savedOptions])

    return (

        <div className="py-24  md:pl-56 md:py-12 w-full flex flex-col gap-10 xs:pl-0 xs:gap-4 ">
            {/* dynamic header that greets the logged user */}
            <h1 className="hero-fluid-text text-center xs:mx-auto font-josefin text-base-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#777] via-[#000] to-[#777] lg:text-5xl sm:text-4xl xs:text-2xl">
                Welcome back, <span className=" font-bold font-josefin text-3xl md:text-4xl text-center  bg-clip-text text-transparent bg-gradient-to-br from-[#ff8cc6] via-[#ffffff] to-[#15c4ff] drop-shadow-[0px_0px_2px_rgb(0,0,0)] xs:text-3xl">{currUser.username}</span>
            </h1>

            {/* this form creates new symbols (aka stock options?) */}
            <form onSubmit={addStockOptionHandler} className="w-max mx-auto flex flex-col justify-center items-center gap-6 my-10">
                <h3 className="text-2xl capitalize font-bold sm:text-lg xs:text-sm">Add a new stock option to track</h3>
                {/* outer form div (inner form div + add button */}
                <div className="flex justify-center items-center gap-18 md:gap-6s xs:gap-3 my-2">
                    {/* inner form div (exchange, :, option) */}
                    <div className="flex justify-center bg-gray-100 rounded-md p-1 md:px-20 sm:px-24 items-center ">
                        {/* the exhange part */}
                        <div className="flex flex-col gap-2 relative">
                            <label className="self-center text-xs uppercase absolute -top-7">Exchange</label>
                            <input
                                ref={exchangeInputRef}
                                className=" xs:text-sm lg:text-2xl uppercase bg-gray-100  hover:translate-y-0 xs:w-28  lg:w-52 px-2 outline-none text-center font-semibold"
                                placeholder='Eg: NASDAQ'
                                autoFocus
                            />
                        </div>
                        {/* the two dots */}
                        <span className="text-4xl font-bold xs:text-xl md:text-xl sm:px-20 md:px-10 hover:translate-y-0 outline-none">:</span>
                        {/* the option part */}
                        <div className="flex flex-col gap-2 relative">
                            <label className="self-center text-xs uppercase absolute -top-7" >Option</label>
                            <input
                                ref={optionInputRef}
                                className=" xs:text-sm lg:text-2xl uppercase bg-gray-100  hover:translate-y-0 xs:w-28  lg:w-52 px-2 outline-none text-center font-semibold"
                                placeholder='Eg: AAPL'
                            />
                        </div>
                    </div>
                    <button type="submit" className="bg-[#2c3e50] hover:bg-[#1a252f] rounded-full text-xl  w-8 h-8 text-gray-200 font-semibold">+</button>
                </div>
            </form>

            {/*
                this code will generate as many chartcomponents as the elements in
                the savedOptions state array, passing them the array contents as symbols
            */}
            {
                <div className="w-full md:w-10/12 mx-auto flex flex-col items-center gap-y-10 xs:gap-y-5 xs:w-11/12">
                    {savedOptions.map((item: string, index: number) => (
                        <div key={index} className='relative w-full z-0'>
                            <button onClick={() => deleteItemHandler(index)}
                                className="absolute-center absolute right-14 top-6 my-1 bg-red-500 hover:bg-red-700 px-4 pb-1 rounded text-4xl z-20 text-white xs:text-sm xs:px-2 xs:right-8 ">x</button>
                            <ChartComponent index={index} passedSymbol={item} />
                        </div>
                    ))
                    }
                </div >
            }
        </div >

    )
}
