// A full-screen sticky section. `.stack-dim` is the overlay that useStack fades in.
export default function StackSection({ id, className, children }) {
  return (
    <section id={id} className={className}>
      <div className="stack-dim" aria-hidden="true" />
      {children}
    </section>
  )
}
