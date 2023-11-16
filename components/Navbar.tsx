import { Container } from "@/components/ui/Container"
import { NavActions } from "./NavActions"
import { NavLinks } from "./NavLinks"
import getCategories from "@/acctions/getCategories"
import Link from "next/link"

export const revalidate = 0

export const Navbar = async () => {
    const categories = await getCategories()

  return (
    <nav className='border-b'>
        <Container>
            <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                    <p className="font-bold text-xl">My Store</p>
                </Link>
                <NavLinks data={categories}/>
                <NavActions />
            </div>
        </Container>
    </nav>
  )
}
