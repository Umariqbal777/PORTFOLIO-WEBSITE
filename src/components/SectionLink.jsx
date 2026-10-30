import { useNavigate } from 'react-router-dom'

// A link to a section of the home page. Works from any route.
export default function SectionLink({ id, className, children, onClick, ...rest }) {
  const navigate = useNavigate()
  return (
    <a
      href={`/#${id}`}
      className={className}
      onClick={e => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
        e.preventDefault()
        if (onClick) onClick()
        navigate({ pathname: '/', hash: '#' + id })
      }}
      {...rest}
    >
      {children}
    </a>
  )
}
