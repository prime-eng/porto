"use client";

import { useEffect, useRef, useState } from "react";

export default function TouchScrollRefresh() {
  const [visible, setVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [rotation, setRotation] = useState(0);
  const touchMode = useRef(false);
  const armed = useRef(false);
  const triggered = useRef(false);
  const lastScrollY = useRef(0);
  const currentRotation = useRef(0);
  const hideTimer = useRef<number | null>(null);
  const inactivityTimer = useRef<number | null>(null);
  const reloadTimer = useRef<number | null>(null);

  useEffect(() => {
    if (!("ontouchstart" in window) && navigator.maxTouchPoints < 1) return;

    function clearTimer(timer: React.MutableRefObject<number | null>) {
      if (timer.current !== null) {
        window.clearTimeout(timer.current);
        timer.current = null;
      }
    }

    function bottomPosition() {
      const pageHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      return Math.max(0, pageHeight - window.innerHeight);
    }

    function isAtBottom() {
      return window.scrollY >= bottomPosition() - 3;
    }

    function scheduleHide() {
      clearTimer(hideTimer);
      if (!triggered.current) {
        hideTimer.current = window.setTimeout(() => setVisible(false), 1000);
      }
    }

    function handleTouchStart(event: TouchEvent) {
      if (event.touches.length !== 1) return;
      clearTimer(inactivityTimer);
      touchMode.current = true;
      lastScrollY.current = window.scrollY;
      armed.current = !isAtBottom();
      triggered.current = false;
      setRefreshing(false);
      setVisible(true);
      scheduleHide();
    }

    function handleTouchEnd() {
      clearTimer(inactivityTimer);
      inactivityTimer.current = window.setTimeout(() => {
        touchMode.current = false;
        if (!triggered.current) setVisible(false);
      }, 1800);
    }

    function handleScroll() {
      if (!touchMode.current || triggered.current) return;
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      lastScrollY.current = currentY;

      if (Math.abs(delta) < 1) return;
      setVisible(true);
      currentRotation.current += delta > 0 ? 55 : -55;
      setRotation(currentRotation.current);
      scheduleHide();

      const atBottom = isAtBottom();
      if (!atBottom) armed.current = true;

      if (delta > 0 && atBottom && armed.current) {
        triggered.current = true;
        setRefreshing(true);
        clearTimer(hideTimer);
        reloadTimer.current = window.setTimeout(() => window.location.reload(), 700);
      }
    }

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("touchcancel", handleTouchEnd, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
      window.removeEventListener("scroll", handleScroll);
      clearTimer(hideTimer);
      clearTimer(inactivityTimer);
      clearTimer(reloadTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={refreshing ? "Memuat ulang halaman" : "Arah gulir"}
      className="pointer-events-none fixed bottom-6 right-5 z-[180] flex items-center gap-3 sm:bottom-8 sm:right-8"
    >
      {refreshing && (
        <span className="rounded-full border border-white/70 bg-white/95 px-4 py-2 text-xs font-semibold text-emerald-950 shadow-lg backdrop-blur">
          Memuat ulang halaman
        </span>
      )}
      <span className={"flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-emerald-900 text-white shadow-xl shadow-emerald-950/20 transition-colors " + (refreshing ? "animate-pulse" : "")}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-5 w-5 transition-transform duration-200 ease-out motion-reduce:transition-none"
          style={{ transform: "rotate(" + rotation + "deg)" }}
        >
          <path d="M20 7v5h-5" />
          <path d="M4.8 9a7.5 7.5 0 0 1 12.7-2L20 12" />
          <path d="M4 17v-5h5" />
          <path d="M19.2 15a7.5 7.5 0 0 1-12.7 2L4 12" />
        </svg>
      </span>
    </div>
  );
}
