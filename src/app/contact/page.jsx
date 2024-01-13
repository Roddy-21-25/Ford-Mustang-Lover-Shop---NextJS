import styles from '@/ModuleStyles/contact.module.css'
import Form from '@/components/Contact/Form'
import Image from 'next/image'
import { CinzelBolder } from "@/utilities/Font";

function ContactPage() {
    return (
        <div>
            <div className={`bg-black ${styles.container} mb-4`}>
                <div className={`${styles.overlay}`}></div>
                <h1 className={`${styles.h1} ${CinzelBolder.className}`}>
                    Talk With Us!
                </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                <div className='xl:col-span-2'>
                    <Form />
                </div>
                <div className='xl:col-span-1 m-4 flex justify-center xl:justify-start'>
                    <div className=''>
                        <div className='bg-black/10 w-fit p-4 rounded-lg xl:my-10'>
                            <div className='flex justify-center'>
                                <Image alt='email' src={'/Home/Social media/email.png'} width={50} height={50} />
                            </div>
                            <p className='my-4 text-xl text-center'>
                                <strong>Email: </strong><br />
                                Roddy3889@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage