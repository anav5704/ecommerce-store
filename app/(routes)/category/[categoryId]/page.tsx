import { MobileFilters } from "./components/MobileFilters"
import { ProductCard } from "@/components/ui/ProductCard"
import { NoResults } from "@/components/ui/NoResults"
import { Container } from "@/components/ui/Container"
import { Billboard } from "@/components/Billboard"
import { Filter } from "./components/Filter"
import getProducts from "@/acctions/getProducts"
import getCategory from "@/acctions/getCatrgory"
import getColors from "@/acctions/getColors"
import getSizes from "@/acctions/getSizes"

export const revalidate = 0

interface CategoryPageProps {
    params: {
        categoryId: string
    },
    searchParams: {
         colorId: string,
         sizeId: string,
    }
}

const CategoryPage = async ({ params, searchParams}: CategoryPageProps) => {
    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId
    })

    const category = getCategory(params.categoryId)
    const colors = await getColors()
    const sizes = await getSizes()
    
  return (
    <div className="bg-white">
        <Container>
            <Billboard data={(await category).billboard}/>
            <div className="px-4 sm:px-6 lg:px-8 pb-24">
                <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                    <MobileFilters sizes={sizes} colors={colors} />
                    <div className="hidden lg:block ">
                        <Filter 
                            valueKey="sizeId"
                            name="Sizes"
                            data={sizes}
                        />
                        <Filter 
                            valueKey="colorId"
                            name="Colors"
                            data={colors}
                        />
                    </div>
                    <div className="mt-6 lg:col-span-4 lg:mt-0">
                    {products.length === 0 ? (
                        <NoResults />
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {products.map((product) => (
                                <ProductCard key={product.id} data={product} />
                            ))}
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default CategoryPage