'use client'

import { useEffect, useRef, RefObject } from 'react'

interface ScrollAnimationOptions extends IntersectionObserverInit {
  /** If true, observe the container element itself instead of its .fade-in children */
  observeSelf?: boolean
}

/**
 * Attach this ref to a container element.
 * All children with className containing "fade-in" inside that container
 * will gain the "is-visible" class when they enter the viewport,
 * triggering the CSS transition defined in globals.css.
 */
export function useScrollAnimation<T extends HTMLElement = HTMLElement>(
  options?: ScrollAnimationOptions
): RefObject<T> {
  const ref = useRef<T>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const { observeSelf = false, ...observerOptions } = options ?? {}

    const targets: Element[] = observeSelf
      ? [container]
      : Array.from(container.querySelectorAll('.fade-in'))

    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
        ...observerOptions,
      }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return ref
}
