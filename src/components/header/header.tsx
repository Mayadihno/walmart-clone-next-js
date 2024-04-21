'use client'
import Link from "next/link"
import Image from "next/image"
import { Grid2X2, Heart, LayoutGrid, Search, ShoppingCart, User } from "lucide-react"
import { FormEvent } from "react"
import { useRouter } from "next/navigation"
import { useCartStore } from "../../../store"
import { getCartTotal } from "@/lib/getCartTotal"

const Header = () => {
    const router = useRouter()
    const cart = useCartStore((state) => state.cart)
    const total = getCartTotal(cart)
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const input = e.currentTarget.input.value
        router.push(`/search?q=${input}`)
    }
    return (
        <header className="flex flex-col md:flex-row bg-walmart items-center px-10 py-4 space-x-5">
            <Link href={'/'} className="mb-5 md:mb-0">
                <Image src="https://i.imgur.com/5V4wehM.png" alt="logo image" width={150} height={150} />
            </Link>
            <form onSubmit={handleSubmit} className="flex items-center rounded-full bg-white w-full flex-1" >
                <input name="input" type="text" className="flex-1 px-4 rounded-l-full outline-none placeholder:text-sm text-black" placeholder="Search everything" />
                <button type="submit"><Search className=" rounded-full h-10 bg-yellow-400 px-2 cursor-pointer w-10" /></button>
            </form>
            <div className="flex space-x-5 mt-5 md:mt-0">
                <Link href={'/'} className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm">
                    <Grid2X2 size={20} />
                    <p>Department</p>
                </Link>
                <Link href={'/'} className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm">
                    <LayoutGrid size={20} />
                    <p>Services</p>
                </Link>
                <Link href={'/'} className="flex text-white font-bold items-center space-x-2 text-sm">
                    <Heart size={20} />
                    <div className="">
                        <p className="text-xs font-extralight">Recorder</p>
                        <p>My Items</p>
                    </div>
                </Link>
                <Link href={'/'} className="flex text-white font-bold items-center space-x-2 text-sm">
                    <User size={20} />
                    <div className="">
                        <p className="text-xs font-extralight">Sign In</p>
                        <p>Account</p>
                    </div>
                </Link>
                <Link href={'/basket'} className="flex text-white font-bold items-center space-x-2 text-sm">
                    <ShoppingCart size={20} />
                    <div className="">
                        <p className="text-xs font-extralight">{cart.length > 0 ? `${cart.length} items` : "No Items"}</p>
                        <p> {cart.length > 0 ? total : 'USD: 0'}</p>
                    </div>
                </Link>
            </div>
        </header>
    )
}

export default Header