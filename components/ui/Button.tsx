import React, { forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className, children, disabled, type="button", ...props
}, ref) => {
    return (
        <button ref={ref} {...props} className={cn("w-auto bg-black border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transiton", className)}>
            {children}
        </button>
    )
})

export default Button
