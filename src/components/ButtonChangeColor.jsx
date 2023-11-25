import sun from "@assets/iconsChangeColor/sun.svg"
import moon from "@assets/iconsChangeColor/moon.svg"
import { useEffect, useState } from "react"

export default function ButtonChangeColor() {
  const [changeColor, setChangeColor] = useState(false)


  const handleChangeColor = () => {
    setChangeColor(prevChangeColor => !prevChangeColor)

    if (!changeColor) {
      localStorage.setItem('color', 'dark')
      return
    }

    localStorage.setItem('color', 'white')
  }

  useEffect(() => {
    const modeColor = localStorage.getItem('color')
    const body = document.querySelector('body')

    if (modeColor === 'dark') {
      setChangeColor(true)
      body.classList.add('dark')
    } else if (modeColor === 'white') {
      setChangeColor(false)
      body.classList.remove('dark')
    }
  }, [changeColor])



  return (
    <button onClick={handleChangeColor}>
      {changeColor ?
        <img src={moon.src} alt={moon.src} /> :
        <img src={sun.src} alt={sun.src} />
      }
    </button>
  )
}
