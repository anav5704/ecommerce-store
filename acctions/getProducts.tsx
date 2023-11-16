import qs from "query-string"
import { Product } from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

interface Query {
    categoryId?: string,
    sizeId?: string,
    colorId?: string,
    isFeatured?: boolean
}

const getProducts = async (query: Query) => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            categoryId: query.categoryId,
            sizeId: query.sizeId,
            colorId: query.colorId,
            isFeatured: query.isFeatured
        }
    })
    
    const response = await fetch(url)
    const products:Product[] = await response.json()
    return products
}

export default getProducts