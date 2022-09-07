import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets"

interface Props {
    passedSymbol: string,
    index: number
}
export const ChartComponent = (props: Props) => {

    return (

        <div className="tab">
            <input
                type="checkbox"
                id={`chk${props.index}`}
                name={`chk${props.index}`}
                className={'accordInput'}
            />
            <label className="tab-label" htmlFor={`chk${props.index}`}>{props.passedSymbol}</label>
            <div className="tab-content">
                <AdvancedRealTimeChart symbol={props.passedSymbol} theme="dark" height="610"></AdvancedRealTimeChart>
            </div>
        </div >

    )
}
