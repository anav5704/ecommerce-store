import { forwardRef } from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className, children, disabled, type="button", ...props
}, ref) => {
    return (
        <button type={type} disabled={disabled} ref={ref} {...props} className={cn("w-auto bg-black border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transiton", className)}>
            {children}
        </button>
    )
})

// Dont know why this is here but it solved my deployment issue so I guess its staying
Button.displayName = 'Button'

export default Button
