import { useEffect } from 'react'

/**
 * Stacked-sections effect: while the next section slides over the current one, the
 * current one shrinks slightly and darkens.
 *
 * Why this is smooth (the old version lagged):
 *  - only transform + opacity are animated (compositor-only, no blur/brightness filter)
 *  - section positions are measured once (on resize), never inside the scroll handler,
 *    so scrolling never forces layout
 *  - one passive scroll listener, throttled with requestAnimationFrame
 *  - only sections whose progress actually changed are touched
 */
export default function useStack(ref) {
  useEffect(() => {
    const main = ref.current
    if (!main) return
    const secs = Array.from(main.children)
    const dims = secs.map(s => s.querySelector(':scope > .stack-dim'))
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let vh = window.innerHeight
    let vw = window.innerWidth
    let tops = []
    let last = secs.map(() => -1)
    let raf = 0

    function layout() {
      vh = window.innerHeight
      // read first, write after (no layout thrash)
      const heights = secs.map(s => s.offsetHeight)
      let y = main.offsetTop
      tops = heights.map(h => { const t = y; y += h; return t })
      secs.forEach((s, i) => {
        s.style.zIndex = i + 1
        s.style.top = Math.min(0, vh - heights[i]) + 'px'
      })
      last = secs.map(() => -1)
      update()
    }

    function update() {
      raf = 0
      if (reduce) return
      const y = window.scrollY
      for (let i = 0; i < secs.length - 1; i++) {
        const t = tops[i + 1] - y // where the next section's top is, relative to viewport
        const p = Math.min(1, Math.max(0, (vh - t) / vh))
        if (Math.abs(p - last[i]) < 0.002 && p !== 0 && p !== 1) continue
        if (p === last[i]) continue
        last[i] = p
        const el = secs[i]
        if (p < 0.005) {
          el.style.transform = ''
          if (dims[i]) dims[i].style.opacity = '0'
        } else {
          el.style.transform = 'scale(' + (1 - p * 0.05).toFixed(4) + ')'
          if (dims[i]) dims[i].style.opacity = (p * 0.45).toFixed(3)
        }
      }
    }

    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    // On phones the URL bar resizes the viewport while scrolling – ignore small height-only changes.
    const onResize = () => {
      if (window.innerWidth === vw && Math.abs(window.innerHeight - vh) < 150) return
      vw = window.innerWidth
      layout()
    }

    let laidOut = 0
    const scheduleLayout = () => { cancelAnimationFrame(laidOut); laidOut = requestAnimationFrame(layout) }
    const ro = 'ResizeObserver' in window ? new ResizeObserver(scheduleLayout) : null
    if (ro) secs.forEach(s => ro.observe(s))

    layout()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      if (ro) ro.disconnect()
      cancelAnimationFrame(raf)
      cancelAnimationFrame(laidOut)
      secs.forEach((s, i) => {
        s.style.transform = ''
        s.style.top = ''
        s.style.zIndex = ''
        if (dims[i]) dims[i].style.opacity = ''
      })
    }
  }, [ref])
}
