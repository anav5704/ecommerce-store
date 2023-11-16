import { ProductCard } from "./ui/ProductCard"
import { NoResults } from "./ui/NoResults"
import { Product } from "@/types"

interface ProductListProps {
    title: string,
    items: Product[]
}

export const ProductList = ({ title, items}: ProductListProps) => {
  return (
    <div className="space-y-4">
        <h3 className="font-bold text-3xl">{title}</h3>
        {items.length === 0 ? (
            <NoResults />
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:gri-cols-5 gap-4">
                {items.map((item) => (
                    <ProductCard key={item.id} data={item} />
                ))}
            </div>
        )}
    </div>
  )
}
