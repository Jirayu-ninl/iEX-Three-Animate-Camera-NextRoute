import Link from 'next/link'

function Overlay() {
  return (
    <ul className='absolute bottom-0 w-screen flex justify-center space-x-2'>
      <p className='opacity-40 font-light'>Author: </p>
      <li className='opacity-40 font-light duration-500 hover:opacity-100 hover:duration-200'>
        <Link href='https://TheIceJi.com'>TheIceJi</Link>
      </li>
      <p className='opacity-40 font-light'>Source:</p>
      <li className='opacity-40 font-light duration-500 hover:opacity-100 hover:duration-200'>
        <Link href='https://github.com/Jirayu-ninl/iEX-Three-Animate-Camera-NextRoute/'>
          Git Repo
        </Link>
      </li>
    </ul>
  )
}

export default Overlay
