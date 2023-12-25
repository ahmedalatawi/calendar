import { useEffect, useRef } from 'react'

function useOnOutsideClick<T extends HTMLElement>(onClick: () => void) {
  const innerContainerRef = useRef<T>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (innerContainerRef.current && !innerContainerRef.current.contains(event.target as Node)) {
        event.stopPropagation()
        onClick()
      }
    }

    window.addEventListener('click', handleClick, true)
    return () => window.removeEventListener('click', handleClick, true)
  }, [onClick])

  return { innerContainerRef }
}

export default useOnOutsideClick
