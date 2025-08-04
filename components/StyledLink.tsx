interface StyledLinkProps {
  href: string
  children: React.ReactNode
  target?: string
  rel?: string
}

export default function StyledLink({
  href,
  children,
  target,
  rel,
}: StyledLinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="font-medium underline decoration-yellow-300 decoration-2 hover:decoration-yellow-400"
    >
      {children}
    </a>
  )
}
