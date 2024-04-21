import fetchProduct from "@/lib/fetchProduct"
import Image from "next/image"
import { notFound } from "next/navigation"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import AddToCart from "@/components/addToCart/AddToCart"


type Props = {
    searchParams: {
        url: string
    }
}

const Product = async ({ searchParams: { url } }: Props) => {
    const product = await fetchProduct(url);
    if (!product) return notFound();
    return (
        <div className="flex flex-col w-full p-4 lg:p-10 lg:flex-row">
            <div className="hidden lg:inline space-y-5">
                {
                    product.content.images.map((image, i) => (
                        <Image key={image} src={image} alt={product.title + " " + i} width={90} height={90} className="border rounded-sm" />
                    ))
                }
            </div>
            <Carousel className="w-3/5 mb-10 lg:w-full lg:mb-0 self-start flex items-center max-w-xl mx-auto lg:mx-20" opts={{
                loop: true,
            }}>
                <CarouselContent>
                    {
                        product.content.images.map((image, i) => (

                            <CarouselItem key={i}>
                                <div className="p-1">
                                    <div className="flex items-center aspect-square justify-center relative p-2">
                                        <Image key={image} src={image} alt={product.title + " " + i} width={400} height={400} />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <div className="flex-1 border rounded-md w-full p-5 space-y-5">
                <h1 className="font-bold text-xl">{product.content.title}</h1>
                <div className="space-x-2">
                    {product.content.breadcrumbs.map((breadcrumb, i) => (
                        <Badge variant='outline' key={breadcrumb + i} className={breadcrumb}>
                            {breadcrumb}
                        </Badge>
                    ))}
                </div>
                <div className="py-5" dangerouslySetInnerHTML={{ __html: product.content.description }} />

                {
                    product.content.rating && (
                        <p className="text-yellow-500 text-sm">{product.content.rating.rating} * <span className="ml-2 text-gray-400">{product.content.rating.count}</span></p>
                    )
                }
                <p className=" text-2xl font-bold mt-2">{product.content?.currency} {product.content.price}</p>

                {/* Add to cart button */}
                <AddToCart product={product.content} />
                <hr />
                {/* table */}
                <h3 className="font-bold text-xl pt-10">Specifications</h3>
                <Table>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Specifications</TableHead>
                            <TableHead>Value</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {product.content.specifications.map((spec) => (
                            <TableRow key={spec.key}>
                                <TableCell className="font-medium">{spec.key}</TableCell>
                                <TableCell>{spec.value}</TableCell>

                            </TableRow>
                        ))}

                    </TableBody>
                </Table>

            </div>
        </div>
    )
}

export default Product