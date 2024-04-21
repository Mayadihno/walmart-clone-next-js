'use Client'

import { useCartStore } from "../../../store"
import { Product } from "../../../typings/productTypings"
import { Button } from "../ui/button"

const RemoveFromCart = ({ product }: { product: Product }) => {
    const removeFromCart = useCartStore((state) => state.removeToCart)

    const handleRemoveFromCart = () => {
        removeFromCart(product)
    }
    return (
        <Button className=' bg-walmart hover:bg-walmart/50' onClick={handleRemoveFromCart}>-</Button>
    )
}

export default RemoveFromCart