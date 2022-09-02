import { Hero } from "../components/homepage/Hero";

// Homepage lists portion
import { List } from '../components/homepage/List';
import { PricingWrapper } from "../components/homepage/PricingWrapper";
import { Footer } from "../components/navigation/Footer"


export const Homepage = () => {
    const ListData = [
        {
            "id": 1,
            "img": "landing-unicorn-trading-1.png",
            "title": "Why us?",
            "text": "Unicorn Trading's software picks the ticker, strikes and expiration dates for you so you can profit without the long guesswork. It's powered by an algorithm fed with 10 years of data and 10 factors proven to work. We save you time and makes you more profitable with higher returns, consistent trades in minutes in all market environments."
        },
        {
            "id": 2,
            "img": "landing-unicorn-trading-2.png",
            "title": "Competitive Advantage of Artificial Intelligence",
            "text": "Harness the power of industry leading A.I. backed algorithms. Similar algorithms the top hedge funds use are now at your fingertips. Our HotScore technology aggregates data from multiple sources to quickly and clearly show you the best options to trade all DONE FOR YOU."
        },
        {
            "id": 3,
            "img": "landing-unicorn-trading-3.png",
            "title": "Speed & time are at our core",
            "text": "Speed means everything in trading. With perfectly timed notifications to place winning trades ahead of your competition, never miss another opportunity with all the best option trades delivered daily to your inbox at market open."
        },
        {
            "id": 4,
            "img": "landing-unicorn-trading-7.png",
            "title": "Built in options chain scanning",
            "text": "Overwhelmed by varying strike prices and which options to buy? We scan the entire options chain so you don’t have to, researching each possible trade ahead of time and recommend you the best plays"
        },
        {
            "id": 5,
            "img": "landing-unicorn-trading-5-modify.png",
            "title": "Powerful for beginners & seasoned professionals alike",
            "text": "Whether you are just starting your journey with options or work on the street yourself, our tools are easy enough to use starting on day 1 and give you the competitive knowledge learned from years of trial & error."
        }
    ]

    const homePageList = ListData.map((item, index) => {
        return (
            <List key={index} {...item} />
        )
    })

    return (
        <div className="xs:pt-24 md:pt-0 xs:pl-0 md:pl-56 w-full">
            <Hero />
            {homePageList}
            <PricingWrapper />
            <Footer />
        </div>
    )
}
