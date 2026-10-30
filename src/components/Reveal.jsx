import { useEffect, useRef } from 'react'

// One shared IntersectionObserver for every reveal-on-scroll element.
// The 'visible' class is added straight on the DOM node, so no React re-render happens.
let io = null
const delays = new WeakMap()

function getIO() {
  if (!io) {
    io = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const el = entry.target
        io.unobserve(el)
        setTimeout(() => el.classList.add('visible'), delays.get(el) || 0)
      }
    }, { threshold: 0.1 })
  }
  return io
}

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    delays.set(el, delay)
    const observer = getIO()
    observer.observe(el)
    return () => observer.unobserve(el)
  }, [delay])
  return <Tag ref={ref} className={className} {...rest}>{children}</Tag>
}
