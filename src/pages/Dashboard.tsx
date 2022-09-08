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

        <div className="py-24 xs:pl-0 md:pl-56 w-full flex flex-col gap-10 ">
            {/* dynamic header that greets the logged user */}
            <h1 className="hero-fluid-text text-center xs:mx-auto font-josefin font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#777] via-[#000] to-[#777]">
                Welcome back, <span className=" font-bold font-josefin text-3xl md:text-6xl text-center  bg-clip-text text-transparent bg-gradient-to-br from-[#ff8cc6] via-[#ffffff] to-[#15c4ff] drop-shadow-[0px_0px_2px_rgb(0,0,0)]">{currUser.username}</span>
            </h1>

            {/* this form creates new symbols (aka stock options?) */}
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

            {/*
                this code will generate as many chartcomponents as the elements in
                the savedOptions state array, passing them the array contents as symbols
            */}
            {
                <div className="w-full md:w-8/12 mx-auto flex flex-col items-center gap-y-10">
                    {savedOptions.map((item: string, index: number) => (
                        <div key={index} className='relative w-full z-0'>
                            <button onClick={() => deleteItemHandler(index)} className="absolute-center absolute right-14 top-6 my-1 bg-red-500 hover:bg-red-700 px-4 pb-1 rounded text-4xl z-20 text-white">x</button>
                            <ChartComponent index={index} passedSymbol={item} />
                        </div>
                    ))
                    }
                </div >
            }
        </div >

    )
}
