import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
    return (
        <div>
            <div className='flex justify-center'>
                <Image width={200} height={200} alt='not found' src='/Not Found/errores.png' className='pt-8' />
            </div>
            <div className='text-lg my-4'>
                <h2 className='text-center text-xl font-bold'>Not Found</h2>
                <p className='text-center'>Could not find requested resource</p>
            </div>
            <div className='flex justify-center'>
                <Link href="/" className='bg-black text-white p-4 m-4 rounded-lg hover:scale-105 transform transition-transform duration-300'>
                    Return Home
                </Link>
            </div>
        </div>
    )
}