import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <>
      <div className='grid grid-cols-3 h-[80px] shadow-xl'>
        <Link href='/' className='w-[120px] grid items-center p-2'>
          <Image src='/logo-real.png' width={120} height={70} alt='Logo'></Image>
        </Link>
        <div className="menu">
          <Link href='/' className='page-title'> HOME </Link>
          <div className='page-title dropdown'>
            <span>SUBMIT</span>
            <div className='hidden content'>
              <Link href='/submit/deals' className='subpage-title'> SUBMIT DEALS </Link>
              <br></br>
              <Link href='/submit/buybox' className='subpage-title'> SUBMIT BUYBOX </Link>
            </div>
          </div>
          <Link href='/dashboard' className='page-title'> DASHBOARD </Link>
        </div>
        <div></div>
      </div>
    </>
  )
}