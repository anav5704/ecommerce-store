export const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

  return (
    <nav className="bg-white border-t mt-14">
        <div className="mx-auto py-5">
            <div className="text-black flex items-center justify-center flex-col md:flex-row text-center">
                <p>Developed and maintained by</p>
                <div>
                    <a className="font-semibold underline" href="https://github.com/anav5704">Anav</a>
                </div>
            </div>
        </div>  
    </nav>
  )
}
