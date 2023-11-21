import { useEffect, useState } from "react";
import img from "../../public/favicon.svg";


export function Nav() {
  const [changeColor, setChangeColor] = useState('white')

  useEffect(() => {
    const visible = () => {
    }
  }, [])


  return (
    <div className="fixed top-0 left-0 right-0 z-20 bg-[#101964]/80  backdrop-blur-lg">
      <nav className="max-w-3xl mx-auto flex items-center justify-between">
        <header
          class="flex gap-3 items-center py-2"
        >
          <picture
            class="w-14 h-14 rounded-full shadow-red-600 overflow-hidden border-2 border-white"
          >
            <img src={img.src} alt="image" />
          </picture>

          <h1 class="text-base text-orange-400 font-bold">Johan Alvarez</h1>
        </header>

        <div>
          boton
        </div>
      </nav>
    </div>
  )
}
