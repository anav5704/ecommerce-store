"use client"

import { usePathname } from "next/navigation"
import { Category } from "@/types"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface NavlinksProps {
    data: Category[]
}

export const NavLinks = ({ data }: NavlinksProps) => {
    const pathName = usePathname()

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathName === `/category/${route.id}`
    }))

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
        {routes.map((route) => (
            <Link key={route.href} href={route.href} className={cn("text-sm font-medium transition-colors hover:text-black", route.active ? "text-black font-bold" : "text-neutral-500")}>
                {route.label}
            </Link>
        ))}
    </nav>
  )
}
