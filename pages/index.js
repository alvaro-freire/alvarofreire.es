import Link from "next/link"
import Seo from "../components/seo"
import SocialMedia from "../components/socialmedia"

function Home() {
  return (
    <>
      <Seo />
      <div className='bg-[#F5CDAA] h-screen text-[#5D5B6A] font-mono'>
        <div className='flex flex-col sm:w-[640px] h-full mx-auto'>
          <div className='h-[100px]'>
            
          </div>
          <div className='grow text-center px-10 flex flex-col justify-center'>
            <div>
              <p className='text text-3xl'>
                Hi! My name&apos;s <span className='text-[#ad957a]'>Álvaro</span>.
              </p>
              <p className='text-md mt-10 mx-4'>
                I&apos;m a passionate developer based in <Link href='https://www.google.com/maps/place/La+Coru%C3%B1a/@43.3618688,-8.4477032,13z/data=!3m1!4b1!4m5!3m4!1s0xd2e7cfcf174574d:0x6a47350d095cdfee!8m2!3d43.3623436!4d-8.4115401'>
                  <a target='_blank' className='transition-colors hover:text-[#CFB495]'>A Coruña</a>
                </Link>, currently @ <Link href='https://innogando.com'>
                  <a target='_blank' className='transition-colors hover:text-[#CFB495]'>Innogando</a>
                  </Link>. I&apos;m really into JavaScript,
                React and Python and building cool products with them. Here&apos;s some of my <Link href='https://github.com/alvaro-freire'>
                  <a target='_blank' className='underline transition-colors hover:text-[#CFB495]' >code</a>
                </Link> :)
              </p>
            </div>
          </div>
          <div className='h-[100px] flex flex-col justify-center'>
            <SocialMedia />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
