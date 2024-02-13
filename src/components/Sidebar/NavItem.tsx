export interface NavItemProps {
  title: string
}

export function NavItem({ title }: NavItemProps) {
  return (
    <a href='#' className="px-2 hover:bg-violet-100">
      <span className="font-medium hover:text-violet-500">
        {title}
      </span>
    </a>
  )
}