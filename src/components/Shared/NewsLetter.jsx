"use client"

import Image from "next/image"


function NewsLetter() {

    const handleClick = () => {
        alert("Thanks to see this E-commerce, don't forget to visit my Linkedin [Link in the footer]");
    };

    return (
        <div className="text-center bg-black/10 p-4 py-8">
            <h1 className="text-3xl font-bold">
                NewsLetter
            </h1>
            <div>
                <Image className="mx-auto my-4" alt="Newsletter" src={`/Home/Social media/email.png`} width={30} height={30} />
            </div>
            <p className="my-4">
                Join our list and get 10% off your first purchase!
            </p>
            <div>
                <input type="text" placeholder="Your best Email" />
                <button className="bg-black text-white p-2" onClick={handleClick}>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter