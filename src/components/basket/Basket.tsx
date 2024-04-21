"use client"
import { getCartTotal } from '@/lib/getCartTotal';
import { useCartStore } from '../../../store'
import { groupBySKU } from '@/lib/getGroupBySKU';
import Image from 'next/image';
import AddToCart from '../addToCart/AddToCart';
import { Button } from '../ui/button';

const Basket = () => {
    const cart = useCartStore((state) => state.cart);
    const basketTotal = getCartTotal(cart)
    const group = groupBySKU(cart)

    return (
        <div className=' mx-auto max-w-7xl'>
            <ul className=' space-y-5 divide-y-2'>
                {Object.keys(group).map((sku) => {
                    const item = group[sku][0]
                    const total = getCartTotal(group[sku])

                    return (
                        <li key={sku} className=' p-5 my-2 flex items-center justify-between'>
                            {item.images[0] && (
                                <Image src={item.images[0]} alt={item.title} width={100} height={100} />
                            )}
                            <div className="flex space-x-4 pl-4">
                                <div className="line-clamp-2 font-medium text-base">
                                    <p>{item.title}</p>
                                    <div className=" line-clamp-2 text-sm font-light mt-2" dangerouslySetInnerHTML={{ __html: item.description }} />
                                </div>
                                <div className="flex flex-col border p-5 rounded-md">
                                    <AddToCart product={item} />
                                    <p className=' font-bold mt-4 text-right'>{total}</p>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <div className="flex flex-col justify-end p-5">
                <p className='font-bold text-2xl text-right text-walmart mb-5'>
                    Total: {basketTotal}
                </p>
                <Button className=' mt-5 h-10 bg-walmart hover:bg-walmart/50'>Checkout</Button>

            </div>
        </div>
    )
}

export default Basket