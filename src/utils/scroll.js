// Scroll to a stacked section by id. Sections are position:sticky, so we compute
// the section's place in the normal flow (sum of the heights above it) instead of
// relying on scrollIntoView.
export function scrollToSection(id, behavior = 'smooth') {
  const main = document.querySelector('main.stack')
  if (!main) return
  let y = main.offsetTop
  for (const sec of main.children) {
    if (sec.id === id) break
    y += sec.offsetHeight
  }
  window.scrollTo({ top: y, behavior })
}
