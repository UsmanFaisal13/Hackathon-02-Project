import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Header = () => {
    return (
        <header className="grid grid-cols-3 w-full h-[100px]">
            <div></div>
            <div className="h-full flex justify-center items-center">
                <nav>
                    <ul className="flex pt-8 md:pt-0 lg:pt-0 lg:gap-16 gap-4 justify-center items-center font-medium text-base">
                        <Link href={'/'}>Home</Link>
                        <Link href={'/shop'}>Shop</Link>
                        <Link href={'/'}>About</Link>
                        <Link href={'/contact'}>Contact</Link>
                    </ul>
                </nav>
            </div>
            <div className="h-full flex justify-center items-center">
                <nav>
                    <ul className="flex gap-10 justify-center items-center">
                        <Link href={'/account'}><Image src={'/account.svg'} width={28} height={28} alt='icon'></Image></Link>
                        <Link href={'/'}><Image src={'/search.svg'} width={28} height={28} alt='icon'></Image></Link>
                        <Link href={'/'}><Image src={'/like.svg'} width={28} height={28} alt='icon'></Image></Link>
                        <Link href={'/cart'}><Image src={'/cart.svg'} width={28} height={28} alt='icon'></Image></Link>

                    </ul>

                </nav>

            </div>

        </header>
    )
}

export default Header