import Link from "next/link"

import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth"

async function LoginSignOut() {
    const session = await getServerSession(options) //? { user: { name: 'Roddy', email: undefined, image: undefined } }
    return (
        <div>
            {
                session ? <Link className="transition duration-150 hover:text-white ease-in" data-test="signout" href="http://localhost:3000/api/auth/signout/credentials">Sign Out</Link>
                    : <Link className="transition duration-150 hover:text-white ease-in" data-test="admin"  href="/admin">Admin Section</Link>
            }
        </div>
    )
}

export default LoginSignOut