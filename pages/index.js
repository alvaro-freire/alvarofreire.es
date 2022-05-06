import Seo from "../components/seo"

function Home() {
  return (
    <>
      <Seo/>
      <div className='bg-[#0D5C63] h-screen flex flex-col justify-center'>
        <div className='p-4 border border-black rounded mx-auto w-[500px] h-56'>
          <div className='p-4 h-full text-[#44A1A0]'>
            <p className='text-center text-xl font-mono w-full'>
              Hi! My name is Álvaro. I&apos;m a CS
              student at Universidade da Coruña.
            </p>
            <p className='text-center text-sm font-mono w-full mt-14'> 
              I&apos;m a big fan of everything related
              to computers and always trying to
              learn new things!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home