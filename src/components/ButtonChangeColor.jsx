import sun from "@assets/iconsChangeColor/sun.svg"
import moon from "@assets/iconsChangeColor/moon.svg"

export default function ButtonChangeColor() {
  return (
    <button>
      <img src={sun.src} alt={sun.src} />
      {/* <img src={moon.src} alt={moon.src} /> */}
    </button>
  )
}
