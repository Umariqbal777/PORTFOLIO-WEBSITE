import { useEffect, useState, useCallback } from 'react'

// The 'light' class is put on <html> by /theme-init.js before first paint (no flash).
export default function useTheme() {
  const [light, setLight] = useState(() => document.documentElement.classList.contains('light'))

  useEffect(() => {
    document.documentElement.classList.toggle('light', light)
    try { localStorage.setItem('theme', light ? 'light' : 'dark') } catch (e) { /* private mode */ }
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.content = light ? '#f5f5f0' : '#080808'
  }, [light])

  const toggle = useCallback(() => setLight(v => !v), [])
  return [light, toggle]
}
