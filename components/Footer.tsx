export const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

  return (
    <nav className="bg-white border-t">
        <div className="mx-auto py-5">
            <p className="text-center text-black">&copy; {year} E-commerce Store, All rights reserved</p>
        </div>  
    </nav>
  )
}
