import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const cur = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');
    if (!cur || !ring) return;
    let mx = 0, my = 0, rx = 0, ry = 0;
    const move = e => { mx = e.clientX; my = e.clientY; };
    window.addEventListener('mousemove', move);
    let raf;
    function loop() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      cur.style.left = mx + 'px'; cur.style.top = my + 'px';
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
      raf = requestAnimationFrame(loop);
    }
    loop();
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf); };
  }, []);
  return (
    <>
      <div id="cursor" />
      <div id="cursor-ring" />
    </>
  );
}
