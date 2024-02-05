import Image from "next/image";
import logoRose from "../public/logo-rose-creme.png"

function Sidebar() {
  return (
    <div>
      <Image src={logoRose} width={500} />
    </div>
  )
}

export default Sidebar;