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
    <a href={href} target={target} rel={rel} className="editorial-link">
      {children}
    </a>
  )
}
