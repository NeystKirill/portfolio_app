import { useEffect } from 'react';

export default function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    elements.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}
