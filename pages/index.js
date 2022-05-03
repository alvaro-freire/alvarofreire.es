import Image from 'next/image'

export default function Home() {
  return (
    <div className='text-center h-screen bg-slate-200'>
      <div>
        <Image alt='logo' src={'/apple-touch-icon.png'} width='60px' height={'60px'} />
      </div>
    </div>
  )
}