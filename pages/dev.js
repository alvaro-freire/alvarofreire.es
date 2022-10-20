import Link from "next/link"
import Seo from "../components/seo"
import SocialMedia from "../components/socialmedia"

function Dev() {
  return (
    <>
      <Seo />
      <div className='flex flex-row h-screen text-white font-mono select-none'>
        <div className='bg-[#F5CD99] w-[400px]'>
          <div className='h-[100px]'></div>
          <div className='ml-[60px] bg-[#151F8A]'>
            <div>
              <p class="text-3xl">Á L V A R O</p>
            </div>
            <div className='h-3'></div>
            <div>
              <p class="text-3xl">F R E I R E</p>
            </div>
          </div>
        </div>
        <div className='bg-pink-500 grow h-full'>
          <div className='h-[100px] flex flex-row bg-red-500'>
            <div className='bg-gray-500 grow' />
            <div className='bg-green-500 w-56 text-2xl text-center font-["Secular_One"] mt-8'>
              <p>
                <Link href='https://www.linkedin.com/in/alvvarofreire/'>
                  <a target='_blank' className='transition-colors hover:text-[#CFB495]'>Resume</a>
                </Link>
              </p>
            </div>
          </div>
          <div className='bg-[#151F8A]'>
            <div className='bg-yellow-500 mt-28 w-[1000px] text-5xl text-justify font-["Secular_One"]'>
              <p>
                I&apos;m a passionate developer based in <Link href='https://www.google.com/maps/place/La+Coru%C3%B1a/@43.3618688,-8.4477032,13z/data=!3m1!4b1!4m5!3m4!1s0xd2e7cfcf174574d:0x6a47350d095cdfee!8m2!3d43.3623436!4d-8.4115401'>
                  <a target='_blank' className='transition-colors hover:text-[#CFB495]'>A Coruña</a>
                </Link>, currently @ <Link href='https://innogando.com'>
                  <a target='_blank' className='transition-colors hover:text-[#CFB495]'>Innogando</a>
                </Link>. I&apos;m really into JavaScript,
                React and Python and building cool products with them. Here&apos;s some of my <Link href='https://github.com/alvaro-freire'>
                  <a target='_blank' className='underline transition-colors hover:text-[#CFB495]' >code</a>
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dev