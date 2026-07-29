export function scrollToSection(sectionId: string): void {
  const target = document.getElementById(sectionId);
  if (!target) return;

  const scrollMarginTop = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
  const desiredScrollTop = target.getBoundingClientRect().top + window.scrollY - scrollMarginTop;
  const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
  const shortfall = desiredScrollTop - maxScrollTop;

  if (shortfall > 0) {
    document.body.style.minHeight = `${document.body.scrollHeight + shortfall}px`;
    const clearSpacer = () => {
      document.body.style.minHeight = '';
      window.removeEventListener('scrollend', clearSpacer);
    };
    window.addEventListener('scrollend', clearSpacer, { once: true });
    setTimeout(clearSpacer, 1200);
  }

  target.scrollIntoView({ behavior: 'smooth' });
}
