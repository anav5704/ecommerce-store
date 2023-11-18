"use client"

import { Currentcy } from "@/components/ui/Currentcy"
import Button from "@/components/ui/Button"
import { ShoppingCart } from "lucide-react"
import { Product } from "@/types"

interface InfoProps {
    data: Product
}

export const Info = ({ data }: InfoProps) => {
  return (
    <div className="">
        <h1 className="font-bold text-3xl text-gray-900 ">{data.name}</h1>
        <div className="mt-3 flex items-end justify-between">
            <p className="text-2xl text-gay-900">
                <Currentcy value={data.price} />
            </p>
        </div>
        <hr className="my-4"/>
        <div className="flex flex-col gap-y-6">
            <div className="flex items-center gap-x-4">
                <h3 className="font-semibold text-black">Size:</h3>
                <div>{data.size.name}</div>
            </div>
            <div className="flex items-center gap-x-4">
                <h3 className="font-semibold text-black">Color:</h3>
                <div  className="h-6 w-6 rounded-full border border-g" style={{ backgroundColor: data.color.value}}/>
            </div>
        </div>
        <div className="mt-10 flex items-center gap-x-3">
            <Button className="flex itmes-center gap-x-2 rounded-full">
                Add to Cart
                <ShoppingCart  className=""/>
            </Button>
        </div>
    </div>
  ) 
}
