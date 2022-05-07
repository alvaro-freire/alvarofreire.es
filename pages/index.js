import Link from "next/link"
import Seo from "../components/seo"
import SocialMedia from "../components/socialmedia"

const a =
  <>
    <Seo />
    <div className='flex flex-col h-screen text-center align-middle justify-center'>
      <div className='absolute p-4 md:w-[700px]'>
        <div className='text-[#44A1A0]'>
          <p className='text-2xl font-mono'>
            Hi! My name is Álvaro. Welcome to my personal portfolio.
          </p>
          <div className='mt-24'></div>
          <p className='text-sm font-mono'>
            I&apos;m a CS student at Universidade da
            Coruña, a big fan of everything
            related to computers and always trying to
            learn new things!
          </p>
        </div>
      </div>
      <div className='mt-auto mb-7 text-sm font-mono flex mx-auto w-full text-[#44A1A0] justify-evenly'>
        <SocialMedia />
      </div>
    </div>
  </>

function Home() {
  return (
    <div className='bg-[#0D5C63] h-screen text-[#44A1A0] font-mono'>
      <div className='flex flex-col sm:w-[640px] h-full mx-auto'>
        <div className='h-[100px]'>

        </div>
        <div className='grow text-center px-10 flex flex-col justify-center'>
          <div>
            <p className='text text-3xl'>
              Hi! My name is <span className='text-[#75cbca]'>Álvaro</span>.
            </p>
            <p className='text-md mt-10 mx-4'>
              I&apos;m a passionate developer currently
              based in <Link href='https://www.google.com/maps/place/La+Coru%C3%B1a/@43.3618688,-8.4477032,13z/data=!3m1!4b1!4m5!3m4!1s0xd2e7cfcf174574d:0x6a47350d095cdfee!8m2!3d43.3623436!4d-8.4115401'>
                <a target='_blank' className='underline transition-colors hover:text-[#fff]' >A Coruña</a>
              </Link>. I&apos;m really into JavaScript,
              React and Python and building cool products with them - I like writing <Link href='https://github.com/alvaro-freire'>
                <a target='_blank' className='underline transition-colors hover:text-[#fff]' >code</a>
              </Link> :)
            </p>
          </div>
        </div>
        <div className='h-[100px] flex flex-col justify-center'>
          <SocialMedia />
        </div>

      </div>
    </div>
  )
}

export default Home