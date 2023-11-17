import { persist, createJSONStorage } from "zustand/middleware"
import { create } from "zustand"
import { Product } from "@/types"
import toast from "react-hot-toast"

interface CartStore {
    items: Product[],
    addItem: (data: Product) => void,
    removeItem: (id: string) => void,
    removeAll: () => void
}

const useCart = create(
    persist<CartStore>((set, get) => ({
        items: [],
        addItem: (data: Product) => {
            const currentItem = get().items
            const existingItem = currentItem.find((item) => item.id === data.id)

            if (existingItem) {
                return toast.error("Item already in cart!")
            }

            set({ items: [...get().items, data] })
            return toast.success("Item added to cart!")
        },
        removeItem: (id: string) => {
            set({ items: [...get().items.filter((item) => item.id != id)] })
            return toast.success("Item removed from cart!")
        },
        removeAll: () => set({ items: [] })
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    })
)

export default useCart