"use client"

import usePreviewModal from "@/hooks/usePreviewModal"
import { Expand, ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"
import { IconButton } from "./IconButton"
import { MouseEventHandler } from "react"
import { Currentcy } from "./Currentcy"
import { Product } from "@/types"
import useCart from "@/hooks/useCart"
import Image from "next/image"

interface ProductCardProps {
    data: Product
}

export const ProductCard = ({ data }: ProductCardProps) => {
    const previewModal = usePreviewModal()
    const router = useRouter()
    const cart = useCart()
    
    const handleClick  = () => {
        router.push(`/product/${data.id}`)
    }

    const onPreview:MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()
        previewModal.onOpen(data)
    }

    const onAddToCart:MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()
        cart.addItem(data)
    }

  return (
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
        <div className="aspect-square rounded-xl bg-gray-100 relative">
            <Image src={data.images[0].url} alt="image" fill className="aspect-square object-cover rounded-md"/>
            <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                <div className="flex gap-x-6 justify-center">
                    <IconButton onClick={onPreview} icon={<Expand size={20} className="text-gray-600" />} />
                    <IconButton onClick={onAddToCart} icon={<ShoppingCart size={20} className="text-gray-600" />} />
                </div>
            </div>
        </div>  
        <div>
            <p className="font-semibold text-lg">{data.name}</p>
            <p className="text-gray-500 text-sm">{data.category.name}</p>
        </div>
        <div className="flex items-center justify-between">
            <Currentcy value={data.price} />
        </div>
    </div>
  )
}
