import { ShoppingBasket } from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import Link from "next/link"

export function Navbar() {

     return (
          <header className="flex items-center justify-between p-4 border-b border-gray-700">
               <Link href="/" className="p-2 border border-gray-700 rounded">
                    <h1 className="text-xl">Switch Craft</h1>
               </Link>
               <div className="flex space-x-4 items-center">
                    <ThemeToggle />
                    <div className="p-2 border border-gray-700 rounded">
                         <ShoppingBasket strokeWidth={"1px"} />
                    </div>
                    <div className="p-2 border border-gray-700 rounded">Login</div>
               </div>
          </header>
     )
}
