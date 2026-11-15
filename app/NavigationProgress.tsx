"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function NavigationProgress() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const previousPath = useRef(pathname);
  const interval = useRef<number | null>(null);
  const finishTimer = useRef<number | null>(null);

  useEffect(() => {
    function start() {
      if (finishTimer.current !== null) {
        window.clearTimeout(finishTimer.current);
        finishTimer.current = null;
      }
      setVisible(true);
      setProgress((value) => value >= 100 ? 8 : Math.max(value, 8));
      if (interval.current === null) {
        interval.current = window.setInterval(() => {
          setProgress((value) => Math.min(92, value + Math.max(0.4, (92 - value) * 0.07)));
        }, 120);
      }
    }

    function handleClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const destination = new URL(anchor.href, window.location.href);
      if (destination.origin !== window.location.origin || destination.pathname === window.location.pathname) return;
      start();
    }

    function handlePopState() {
      start();
    }

    document.addEventListener("click", handleClick, true);
    window.addEventListener("popstate", handlePopState);
    return () => {
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("popstate", handlePopState);
      if (interval.current !== null) window.clearInterval(interval.current);
      if (finishTimer.current !== null) window.clearTimeout(finishTimer.current);
    };
  }, []);

  useEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;
    if (!visible) return;

    if (interval.current !== null) {
      window.clearInterval(interval.current);
      interval.current = null;
    }
    const completionFrame = window.requestAnimationFrame(() => setProgress(100));
    finishTimer.current = window.setTimeout(() => {
      setVisible(false);
      setProgress(0);
      finishTimer.current = null;
    }, 260);
    return () => window.cancelAnimationFrame(completionFrame);
  }, [pathname, visible]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[200]" aria-live="polite" aria-label="Memuat halaman">
      <div
        role="progressbar"
        aria-label="Progres perpindahan halaman"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress)}
        className="h-[3px] origin-left bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)] transition-transform duration-150 ease-out"
        style={{ transform: "scaleX(" + progress / 100 + ")" }}
      />
      <div className="absolute right-4 top-4 flex items-center gap-2.5 rounded-full border border-white/70 bg-white/95 px-3.5 py-2 text-xs font-medium text-[#26332c] shadow-lg shadow-black/10 backdrop-blur sm:right-6 sm:top-5">
        <span aria-hidden="true" className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-emerald-800/20 border-t-emerald-800 motion-reduce:animate-none" />
        Membuka halaman
      </div>
    </div>
  );
}
