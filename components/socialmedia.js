import SocialMediaIcon from "./socialmediaicon"

function Socialmedia() {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/alvvarofreire/', img: '/linkedin-svgrepo-com.svg' },
    { name: 'GitHub', url: 'https://github.com/alvaro-freire', img: '/github-svgrepo-com.svg' },
    { name: 'Instagram', url: 'https://instagram.com/alvvarofreire', img: '/instagram-svgrepo-com.svg' }
  ]
  return (
    <div className='flex justify-evenly'>
      {socialLinks.map((s, i) => {
        return <SocialMediaIcon key={i} {...s} />
      })}
    </div>
  )
}

export default Socialmedia
