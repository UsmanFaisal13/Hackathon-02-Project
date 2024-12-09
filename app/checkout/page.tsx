import Header from "../components/Header"
import Hero from "../components/Hero"
import Feature from "../components/Feature"

export default function Page() {
    return (
        <>
            <Header />
            <Hero name="Checkout" />
            <section className="w-full px-4 py-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-44">
                <div className="flex flex-col flex-wrap">
                    <h1 className="font-semibold text-4xl my-16">Billing details</h1>
                    <form></form>

                </div>
            </section >



            <Feature />

        </>
    )
};