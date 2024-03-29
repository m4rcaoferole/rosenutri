import Link from "next/link"

interface NavItemProps {
  title: string
  href: string
}

export function NavItem({ title, href }: NavItemProps) {
  return (
    <Link href={href} className="px-6 block md:text-lg rounded md:p-0">
      <span className="text-midori200 font-semibold hover:text-murasaki300">
        {title}
      </span> 
    </Link>
  )
}