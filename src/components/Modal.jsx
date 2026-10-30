import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Arrow } from './Icon.jsx'

// Rendered in a portal on <body>: sections are transformed, which would otherwise
// break position:fixed.
export default function Modal({ data, onClose }) {
  const open = !!data
  const last = useRef(null)
  const closeBtn = useRef(null)
  if (data) last.current = data
  const d = data || last.current

  useEffect(() => {
    if (!open) return
    const onKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeBtn.current && closeBtn.current.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return createPortal(
    <div
      className={'modal-backdrop' + (open ? ' open' : '')}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
      aria-hidden={!open}
    >
      <div className="modal-box" role="dialog" aria-modal="true" aria-label={d ? d.title : 'Details'}>
        <button ref={closeBtn} className="modal-close" onClick={onClose} aria-label="Close">
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {d && (
          <>
            {d.category && <p className="modal-category">{d.category}</p>}
            <h3 className="modal-title">{d.title}</h3>
            {d.stack && <p className="modal-section-label">Description</p>}
            <p className="modal-desc">{d.desc}</p>
            {d.stack && (
              <>
                <p className="modal-section-label">Technology Stack</p>
                <div className="modal-stack">
                  {d.stack.map(t => <span key={t} className="modal-tag">{t}</span>)}
                </div>
              </>
            )}
            {d.link && (
              <a className="modal-link" href={d.link} target="_blank" rel="noopener noreferrer">
                {d.linkLabel || 'View Project'} <Arrow />
              </a>
            )}
          </>
        )}
      </div>
    </div>,
    document.body
  )
}
