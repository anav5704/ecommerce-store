import { Category } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategories = async () => {
    const response = await fetch(url)
    const categories:Category[] = await response.json()
    return categories
}

export default getCategories