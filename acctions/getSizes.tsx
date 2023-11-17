import { Size } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/sizes`

const getSizes = async () => {
    const response = await fetch(url)
    const sizes:Size[] = await response.json()
    return sizes
}

export default getSizes