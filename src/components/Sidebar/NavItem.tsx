import Link from "next/link"

export interface NavItemProps {
  title: string
  href: string
}

export function NavItem({ title, href }: NavItemProps) {
  return (
    <Link href={href} className="px-6">
      <span className="text-midori200 font-semibold hover:text-murasaki300">
        {title}
      </span>
    </Link>
  )
}