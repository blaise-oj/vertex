import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollRestoration = () => {
  const location = useLocation()

  useEffect(() => {
    const savedPosition = sessionStorage.getItem(location.pathname)

    // small delay makes transitions feel smoother
    setTimeout(() => {
      if (savedPosition) {
        window.scrollTo({
          top: parseInt(savedPosition),
          behavior: "smooth"
        })
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }
    }, 80) // 👈 tweak 50–120ms if needed

    return () => {
      sessionStorage.setItem(location.pathname, window.scrollY)
    }

  }, [location])

  return null
}

export default ScrollRestoration