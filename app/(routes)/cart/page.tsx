"use client"

import { Container } from "@/components/ui/Container"
import { NoResults } from "@/components/ui/NoResults"
import { CartItem } from "./components/CartItem"
import { Summary } from "./components/Summary"
import { useEffect, useState } from "react"
import useCart from "@/hooks/useCart"

const CartPage = () => {
    const [isMounted, setIsMounted] = useState(false)
    const cart = useCart()

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if(!isMounted) return null

  return (
    <div className="bg-white">
        <Container>
            <div className="py-4 px-16 sm:px-6 lg:px-8">
                <h1 className="font-bold text-3xl text-black">Shopping Cart</h1>
                <div className="mt-12 md:grid md:grid-cols-12 md:items-start gap-x-12">
                    <div className="md:col-span-7">
                        {cart.items.length === 0 ? (
                            <p className="text-neutral-500">You have no items in your cart.</p>
                        ) : (
                            <ul>
                                {cart.items.map((item) => (
                                    <CartItem key={item.id} data={item} />
                                ))}
                            </ul>
                        )}
                    </div>
                    <Summary />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default CartPage