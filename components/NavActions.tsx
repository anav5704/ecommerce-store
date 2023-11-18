"use client"

import Button from '@/components/ui/Button'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ShoppingBag } from 'lucide-react'
import useCart from '@/hooks/useCart'

export const NavActions = () => {
    const router = useRouter()
    const [isMounted, setIsMounted] = useState(false)
    const cart = useCart()

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if(!isMounted) return null

  return (
    <div className='ml-auto flex items-center gap-x-4'>
        <Button onClick={() => router.push("/cart")} className='flex items-center rounded-full bg-black px-4 py-2'>
            <ShoppingBag size={20} color='white'/>
            <span className='ml-2 font-medium text-white'>{cart.items.length}</span>
        </Button>
    </div>
  )
}
