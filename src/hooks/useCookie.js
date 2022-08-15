/**
 * Use Cookie Hook
 * @module 🔗:hooks/useCookie
 *
 * @author Hamza Hussain <hamzahussain@carchaze.com>
 * @version 0.1.0
 * @description Cookie Modular, To use browser cookies
 *
 */

import { useState, useCallback } from "react"
import Cookies from "js-cookie"

/**
 * To use browser cookies
 * 
 * @function
 * @param {string} name 
 * @param {any} defaultValue 
 * @returns {Array<any>}
 * 
 * @example
 * import useCookie from "./useCookie"
 * 
 * export default function CookieComponent() {
 *   const [value, update, remove] = useCookie("name", "John")
 * 
 *   return (
 *     <>
 *       <div>{value}</div>
 *       <button onClick={() => update("Sally")}>Change Name To Sally</button>
 *       <button onClick={remove}>Delete Name</button>
 *     </>
 *   )
 * }
 */
export default function useCookie(name, defaultValue) {
  const [value, setValue] = useState(() => {
    const cookie = Cookies.get(name)
    if (cookie) return cookie
    Cookies.set(name, defaultValue)
    return defaultValue
  })

  const updateCookie = useCallback(
    (newValue, options) => {
      Cookies.set(name, newValue, options)
      setValue(newValue)
    },
    [name]
  )

  const deleteCookie = useCallback(() => {
    Cookies.remove(name)
    setValue(null)
  }, [name])

  return [value, updateCookie, deleteCookie]
}
