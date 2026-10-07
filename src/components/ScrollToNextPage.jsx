import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { navLinks } from '../data/navItems';

export function ScrollToNextPage({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let timeout = null;

    const goNext = () => {
      const currentIndex = navLinks.indexOf(location.pathname);
      if (currentIndex !== -1 && currentIndex < navLinks.length - 1) {
        navigate(navLinks[currentIndex + 1]);
      }
    };

    const goPrev = () => {
      const currentIndex = navLinks.indexOf(location.pathname);
      if (currentIndex > 0) {
        navigate(navLinks[currentIndex - 1]);
      }
    };

    const throttle = (fn) => {
      if (timeout) return;
      timeout = setTimeout(() => { timeout = null; }, 600);
      fn();
    };

    const hasScroll = document.documentElement.scrollHeight > window.innerHeight;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      lastScrollY = currentScrollY;

      const isAtBottom = window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 20;
      const isAtTop = currentScrollY <= 50;

      if (direction === 'down' && isAtBottom) throttle(goNext);
      if (direction === 'up' && isAtTop) throttle(goPrev);
    };

    const handleWheel = (e) => {
      if (hasScroll) {
        return;
      }
      if (e.deltaY > 0) throttle(goNext);
      else throttle(goPrev);
    };

    let touchStartY = 0;
    const handleTouchStart = (e) => { 
      if (hasScroll) {
        return;
      }
      touchStartY = e.touches[0].clientY; 
    };

    const handleTouchMove = (e) => {
      if (hasScroll) {
        return;
      }
      const touchEndY = e.touches[0].clientY;
      if (touchEndY < touchStartY) throttle(goNext);
      else throttle(goPrev);
    };

    if (hasScroll) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.addEventListener('wheel', handleWheel);
      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchmove', handleTouchMove);
    }
    
    // Отписываемся при размонтировании
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [navigate, location.pathname]);

  return children;
}