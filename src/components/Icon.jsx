import paths from './iconPaths.js'

export default function Icon({ name, size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  )
}

export function Arrow({ size = 14, width = 2.5 }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={width} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
}
