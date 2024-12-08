import Image from 'next/image';
import Link from 'next/link';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <header className="grid grid-cols-3 w-full h-[100px] bg-[#FBEBB5]">
        <div></div>
        <div className="h-full flex justify-center items-center">
          <nav>
            <ul className="flex gap-16 justify-center items-center font-medium text-base">
              <Link href={'/'}>Home</Link>
              <Link href={'/'}>Shop</Link>
              <Link href={'/'}>About</Link>
              <Link href={'/'}>Contact</Link>
            </ul>
          </nav>
        </div>
        <div className="h-full flex justify-center items-center">
          <nav>
            <ul className="flex gap-10 justify-center items-center">
              <Link href={'/'}><Image src={'/account.svg'} width={28} height={28}></Image></Link>
              <Link href={'/'}><Image src={'/search.svg'} width={28} height={28}></Image></Link>
              <Link href={'/'}><Image src={'/like.svg'} width={28} height={28}></Image></Link>
              <Link href={'/'}><Image src={'/cart.svg'} width={28} height={28}></Image></Link>

            </ul>
          </nav>

        </div>

      </header>

      <section className='w-full h-[900px] bg-[#FBEBB5] flex justify-center pl-14 items-center'>
        <div className='flex flex-col gap-8 justtify-center items-start font-medium'>
          <h1 className='text-[64px] font-medium'>Rocket single <br />seater</h1>
          <button className="border-b-2 border-b-neutral-950 h-8">Shop Now</button>
        </div>

        <Image src={'/rocket.png'} width={853} height={1000}></Image>


      </section>
      <section className='flex w-full h-[672px] bg-[#f4f4f4] justify-center items-center gap-32'>
        <div className='w-[500px] h-[500px] flex flex-col'>
          <Image src={'/granite-table.png'} width={500} height={500} className='p-0'></Image>
          <div className='flex flex-col gap-6 relative bottom-40 left-10'>
            <h1 className='text-4xl font-medium'>Side table</h1>
            <Link href={'/'}> <button className='border-b-2 border-b-neutral-950 h-12 font-medium text-2xl'>
              View More</button></Link>

          </div>
        </div>
        <div className='w-[500px] h-[500px]  flex flex-col'>
          <Image src={'/cloud-sofa.png'} width={500} height={500} className='p-0'></Image>
          <div className='flex flex-col gap-6 relative bottom-32 left-10'>
            <h1 className='text-4xl font-medium'>Side table</h1>
            <Link href={'/'}> <button className='border-b-2 border-b-neutral-950 h-12 font-medium text-2xl'>
              View More</button></Link>

          </div>
        </div>


      </section>
      <section className='flex w-full h-[877px] bg-[#ffffff] flex-col items-center'>
        <h1 className='font-medium text-4xl pt-16 pb-8'>Top Picks For You</h1>
        <p className='text-[#9f9f9f] font-medium'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
        <div className='flex items-center justify-center gap-12 pt-16'>
          <div className='flex flex-col w-72 h-96 justify-center'>
            <div className='w-[300px] h-[300px] flex justify-center items-center'>
              <Image src={'/sofa_2.png'} width={400} height={400}></Image>
            </div>

            <h1>Trenton modular sofa_3</h1>
            <h1 className='font-medium text-2xl pt-2'>Rs. 25,000.00</h1>


          </div>
          <div className='flex flex-col w-72 h-96 justify-center '>
            <div className='w-[300px] h-[300px] flex justify-center items-center'> <Image src={'/dinner-table.png'} width={300} height={300}></Image></div>

            <h1 >Granite dining table with dining chair</h1>
            <h1 className='font-medium text-2xl pt-2'>Rs. 25,000.00</h1>


          </div>
          <div className='flex flex-col w-72 h-96 justify-center '>
            <div className='w-[300px] h-[300px] flex justify-center items-center'>
              <Image src={'/stool.png'} width={400} height={400}></Image>
            </div>
            <h1>Outdoor bar table and stool</h1>
            <h1 className='font-medium text-2xl pt-2'>Rs. 25,000.00</h1>


          </div>
          <div className='flex flex-col w-72 h-96 justify-center'>
            <div className='w-[300px] h-[300px] flex justify-center items-center'>
              <Image src={'/mirror.png'} width={400} height={400}></Image>
            </div>
            <h1>Plain console with teak mirror</h1>
            <h1 className='font-medium text-2xl pt-2'>Rs. 25,000.00</h1>



          </div>

        </div>
        <Link href={'/'}><button className='relative top-24 text-xl font-medium h-16 border-b-2 border-black'>View More</button></Link>


      </section>
      <section className='flex w-full h-[777px] bg-[#FFF9E5] justify-center items- gap-32'>
        <Image src={'/asgaard.png'} width={900} height={800}></Image>
        <div className='flex flex-col gap-6 items-center justify-center'>
          <h1 className='text-2xl font-medium'>New Arrivals</h1>
          <h1 className='text-5xl font-bold pb-8'>Asgaard sofa</h1>
          <Link href={'/'}><button className='border-2 border-black w-64 h-16 font-medium text-xl'>Order Now</button></Link>
        </div>

      </section>

      <section className='flex flex-col w-full h-[844px] bg-[#FFFfff] items-center'>
        <h1 className='font-medium text-4xl pt-16 pb-8'>Our Blogs</h1>
        <p className='text-[#9f9f9f] font-medium'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
        <div className='flex justify-center gap-12 pt-16 items-center'>
          <div className='flex flex-col w-72 h-96 justify-center items-center'>
            <Image src={'/blog-1.png'} width={400} height={400}></Image>
            <h1 className='pt-8'>Going all-in with millennial design</h1>
            <Link href={'/'}><button className='text-2xl font-medium border-b-2 border-black h-12'>Read More</button></Link>
            <Image src={'/time.png'} width={200} height={100} className='pt-4'></Image>
          </div>
          <div className='flex flex-col w-72 h-96 justify-center items-center'>
            <Image src={'/blog-2.png'} width={400} height={400}></Image>
            <h1 className='pt-8'>Going all-in with millennial design</h1>
            <Link href={'/'}><button className='text-2xl font-medium border-b-2 border-black h-12'>Read More</button></Link>
            <Image src={'/time.png'} width={200} height={100} className='pt-4'></Image>
          </div>
          <div className='flex flex-col w-72 h-96 justify-center items-center'>
            <Image src={'/blog-3.png'} width={400} height={400}></Image>
            <h1 className='pt-8'>Going all-in with millennial design</h1>
            <Link href={'/'}><button className='text-2xl font-medium border-b-2 border-black h-12'>Read More</button></Link>
            <Image src={'/time.png'} width={200} height={100} className='pt-4'></Image>
          </div>

        </div>
        <Link href={'/'}><button className='relative top-32 text-xl font-medium h-16 border-b-2 border-black'>View All Post</button></Link>


      </section>
      <section className='flex flex-col w-full h-[450px] justify-center items-center gap-8 bg-bg-pattern bg-cover bg-center bg-no-repeat'>
        <h1 className='font-bold text-6xl'>Our Instagram</h1>
        <p className=' text-xl'>Follow our store on Instagram</p>
        <Link href={'/'}><button className='text-xl w-64 h-16 rounded-[50px] drop-shadow-md bg-[#FAF4F4]'>Follow Us</button></Link>

      </section>


    </>
  );
}
