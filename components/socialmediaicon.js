import Image from "next/image"
import Link from "next/link"

function SocialMediaIcon({ name, url, img }) {
  return (
    <Link href={url} >
      <a target='_blank' className='transition-colors hover:text-[#fff]' >
        <div className='flex' >
          <Image alt='socialmedia' src={img} width={16} height={16} />
          <p className='ml-1'>{name}</p>
        </div>
      </a>
    </Link>
  )
}

export default SocialMediaIcon