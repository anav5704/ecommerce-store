import { Billboard } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

const getBillboard = async (id: string) => {
    const response = await fetch(`${url}/${id}`)
    const billboard:Billboard = await response.json()
    return billboard
}

export default getBillboard