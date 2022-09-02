import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="flex flex-row justify-center p-6 my-6">
      <div className='text-sm text-neutral-600'>&copy; {(new Date()).getFullYear()} Pixy</div>
      <Link href={'/privacy'} passHref><a className='ml-4 text-sm text-neutral-600'>Privacy Policy</a></Link>
      <Link href={'/terms'} passHref><a className='ml-4 text-sm text-neutral-600'>Terms of Service</a></Link>
    </footer>
 )
}