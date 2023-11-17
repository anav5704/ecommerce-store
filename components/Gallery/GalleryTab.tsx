import { Image as ImageType } from "@/types"
import { Tab } from "@headlessui/react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface GalleryTabProps { 
    image: ImageType
}

export const GalleryTab = ({ image }: GalleryTabProps) => {
  return (
    <Tab className="relative aspect-square flex cursor-pointer items-center justify-center rounded-md bg-white">
        {({ selected }) => (
            <div>
                <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                    <Image src={image.url} fill  alt="image" className="object-cover object-center"/>
                </span>
                <span className={cn("absolute inset-0 rounded-md ring-2 ring-offset-2", selected ? "ring-black" : "ring-transparent")} />
            </div>
        )}
    </Tab>
  )
}
