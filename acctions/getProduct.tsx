import { Product } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/products`

const getProduct = async (id: string) => {
    const response = await fetch(`${url}/${id}`)
    const product:Product = await response.json()
    return product
}

export default getProduct