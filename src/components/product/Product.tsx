import React from 'react'
import { Organic } from '../../../typings/searchTypings'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '../ui/badge'

const Product = ({ product }: { product: Organic }) => {
    return (
        <div>
            <Link href={{
                pathname: '/product',
                query: { url: product.url }
            }} className='flex relative flex-col border h-full rounded-md p-5'>
                <Image src={product.image} width={200} height={200} alt={product.title} className='mx-auto' />
                <p className='font-bold text-xl'>
                    {product.price?.curreency}
                    {product.price.price}
                </p>
                {product.badge && (
                    <Badge className=' w-fit absolute top-2 right-2'>{product.badge}</Badge>
                )}
                <p className='font-light'>{product.title}</p>
                {product.rating && (
                    <p className='text-sm text-yellow-500'>{product.rating.rating} * <span className='ml-2 text-gray-400'>{product.rating.count}</span></p>
                )}
            </Link>
        </div>
    )
}

export default Product