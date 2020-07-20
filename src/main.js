import { useEffect } from 'react'

export default function useClickOutside(nodeRef, dispatch) {
  const handleClickOutside = e => {
    if (nodeRef[0].current == null) return
    nodeRef.forEach(
      ref => !ref.current.contains(e.target) && dispatch(),
    )
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () =>
      document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  return null
}
