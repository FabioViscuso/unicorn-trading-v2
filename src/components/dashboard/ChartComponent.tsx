import { useState } from "react"
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets"

interface Props {
    passedSymbol: string,
    index: number
}
export const ChartComponent = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="tab">
            {/*
                this component uses the checkbox hack to open the accordion, but
                also uses a simple state to conditionally render the AdvancedRealTimeChart component.
                this avoids bugs and improves performance
            */}
            <input
                type="checkbox"
                id={`chk${props.index}`}
                name={`chk${props.index}`}
                className={'accordInput'}
            />
            <label onClick={() => { setIsOpen(!isOpen) }} className="tab-label" htmlFor={`chk${props.index}`}>
                {props.passedSymbol}
            </label>
            <div className="tab-content">
                {isOpen && <AdvancedRealTimeChart symbol={props.passedSymbol} theme="dark" autosize={true}></AdvancedRealTimeChart>}
            </div>
        </div>
    )
}
