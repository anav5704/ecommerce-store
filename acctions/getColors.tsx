import { Color } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/colors`

const getColors = async () => {
    const response = await fetch(url)
    const colors:Color[] = await response.json()
    return colors
}

export default getColors