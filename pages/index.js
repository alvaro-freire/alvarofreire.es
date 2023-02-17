import Link from "next/link"
import Seo from "../components/seo"
import SocialMedia from "../components/socialmedia"

function Home() {
  return (
    <>
      <Seo />
      <div className='bg-[#F5CDBB] min-h-[100vh] max-w-[100vw] text-[#5D5B6A] font-mono flex flex-col justify-center'>
        <div className='flex py-12 flex-col sm:max-w-[620px] h-full mx-auto px-4'>
          <div className='grow flex flex-col justify-center'>
            <div>
              <p className='text-2xl text-center'>
                Hey, hey, hey! Look who we have here! You made it to my page and I couldn&apos;t be more excited 😁
              </p>
              <p className='text-center text-lg py-10 mx-4'>
                Here are some interesting things I can tell you about me:
              </p>
              <p className='text-md mx-4'>
                - My name&apos;s <span className='text-[#d17b56]'>Álvaro</span> &#40;🇪🇸 Team&#41; <br/><br/>
                - I&apos;m currently <span className='text-[#d17b56]'>21 years old</span> and finishing my studies in <span className='text-[#d17b56]'>Computer Engineering</span> 💻. <br/><br/>
                - I consider myself as a person who loves getting out of his <span className='text-[#d17b56]'>comfort zone</span>, setting <span className='text-[#d17b56]'>challenges</span> 🏁 to himself and learning new things about any topic. <br/><br/>
                - I&apos;m a big fan of traveling <span className='text-[#d17b56]'>all around the world</span> 🌍 - I've been fortunate enough to visit <span className='text-[#d17b56]'>10 countries</span> so far! <br/> <br/>
                - I have participated in <span className='text-[#d17b56]'>3 Erasmus+ YE</span> 🇪🇺 and co-wrote 📝 one of them! <br/><br/>
                - I co-founded a youth club 👦👧 in my hometown 🏡. <br/><br/>
                - I&apos;m always enthusiastic about <span className='text-[#d17b56]'>meeting new people</span>. You never know who can inspire you 💭 or make an impact 💡 in your life! <br/><br/>
                - I&apos;m also a big fan of practicing all kinds of sports. I've tried my hand at <span className='text-[#d17b56]'>9 different sports</span>! ⚽🏀🎾🥋 &#40;That's as many as I can remember 🤪&#41;
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
