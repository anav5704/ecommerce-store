import { Category } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategory = async (id: string) => {
    const response = await fetch(`${url}/${id}`)
    const category:Category = await response.json()
    return category
}

export default getCategory