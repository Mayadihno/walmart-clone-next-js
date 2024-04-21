import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

type Props = {
    title: string
    image?: string
    className?: string
}
const GridOption = ({ title, image, className }: Props) => {
    return (
        <div>
            <Link href={{
                pathname: '/search',
                query: { q: title }
            }} className={cn('relative', className)}>
                <h2 className="text-xl font-bold absolute top-2 left-2">{title}</h2>
                {
                    image && (
                        <Image src={image} alt={title} width={500} height={500} className="object-cover rounded-md opacity-20" />
                    )
                }
            </Link>
        </div>
    )
}

export default GridOption