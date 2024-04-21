import Basket from '@/components/basket/Basket'
import { ShoppingCartIcon } from 'lucide-react'
import React from 'react'

const BasketPage = () => {
    return (
        <div className='w-full p-10 mx-auto max-w-7xl'>
            <div className='flex items-center space-x-2'>
                <ShoppingCartIcon className='w-10 h-10' />
                <h1 className='text-3xl font-medium'>Your Cart</h1>
            </div>
            <p className='mb-5 mt-2'>
                Review the item in your cart and checkout when ready
            </p>
            <Basket />
        </div>
    )
}

export default BasketPage