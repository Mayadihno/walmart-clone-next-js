"use client"
import Basket from "@/components/basket/Basket"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useRouter } from "next/navigation";

const BasketPageInterception = () => {
    const router = useRouter();
    function onDismiss() {
        router.back()
    }
    return (
        <div>
            <Dialog open onOpenChange={(isOpen) => {
                if (!isOpen) {
                    onDismiss()
                }
            }}>
                <DialogContent className=" w-full h-4/5 overflow-scroll max-w-3xl">
                    <DialogHeader>
                        <DialogTitle>Basket</DialogTitle>
                        <DialogDescription>
                            <p>Contents of your basket</p>
                        </DialogDescription>
                    </DialogHeader>
                    <Basket />
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default BasketPageInterception