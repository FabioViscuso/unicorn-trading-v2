interface PricingProps {
    price: number,
    billingPeriod: string
}

export const Pricing = (props: PricingProps) => {
    return (
        <section className="card flex flex-col md:flex-row justify-between " >
            <div className="flex flex-col p-2 md:p-4  items-center" >
                <h2 className="text-gray-800 text-xl"> Only ${props.price} /{props.billingPeriod}</h2>
                <div className="font-semibold text-3xl text-[#f096ad] place-self-center">
                    {props.billingPeriod === 'year' ? <p style={{ fontSize: '1.7rem' }}>SAVE $134 ANNUALLY</p> : ''}
                </div>
                <ul className="items-center">
                    <li className="font-quicksand text-gray-800 text-md py-1 md:py-2">- Daily options recommendation</li>
                    <li className="font-quicksand text-gray-800 text-md py-1 md:py-2">- Suggested strike prices for each symbol</li>
                    <li className="font-quicksand text-gray-800 text-md py-1 md:py-2">- 8 recommended options strategies</li>
                    <li className="font-quicksand text-gray-800 text-md py-1 md:py-2">- Grading system for better options trading</li>
                    <li className="font-quicksand text-gray-800 text-md py-1 md:py-2">- Proprietary indicators</li>
                    {props.billingPeriod === 'year' &&
                        <>
                            <li className="font-quicksand text-gray-800 text-md py-2 md:py-1">- Exclusive newsletter</li>
                            <li className="font-quicksand text-gray-800 text-md py-2 md:py-1">- More Unicorns!</li>
                        </>}
                </ul>
                <button className="neumButton px-6 py-3 " type='submit'>Subscribe Now</button>
            </div>
        </section>
    )
}
