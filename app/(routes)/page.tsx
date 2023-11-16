import { ProductList } from "@/components/ProductList"
import { Container } from "@/components/ui/Container"
import { Billboard } from "@/components/Billboard"
import getBillboard from "@/acctions/getBillboard"
import getProducts from "@/acctions/getProducts"

export const revalidate = 0


const HomePage = async () => {
    const products = await getProducts({ isFeatured: true })
    const billboard = await getBillboard("0642ebd6-973e-4d34-8a56-651730754b12")

  return (
    <Container>
        <div className="spce-y-10 pb-10">
            <Billboard data={billboard}/>
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={products}/>
        </div>
    </Container>
  )
}

export default HomePage