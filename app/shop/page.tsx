import Header from "../components/Header"
import Hero from "../components/Hero"
import Feature from "../components/Feature"
import Card from "../components/productCard"
import Link from "next/link"
import PageNumber from "../components/PageNumber"

export default function Page() {
    return (
        <>
            <Header />
            <Hero name="Shop" />
            <section className="grid grid-cols-4 grid-flow-row gap-8 px-32 py-4">

                <Link href={'/shop'}><Card image='sofa_2.png' name='Cloud Sofa' amount='Rs. 25,000.00' /></Link>

            </section>
            <PageNumber />
            <Feature />





        </>
    )
};