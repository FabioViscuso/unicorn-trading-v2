import { Pricing } from "./Pricing";


export const PricingWrapper = () => {
    const pricing = [
        { id: 1, billingPeriod: 'month', price: 67 },
        { id: 2, billingPeriod: 'year', price: 670 }
    ]

    const pricingMenu = pricing.map(items => {
        return (
            <Pricing key={items.id} {...items} />
        )
    })

    return (
        <div className="flex flex-col md:flex-row gap-12 justify-center ">
            {pricingMenu}
        </div>
    )
}
