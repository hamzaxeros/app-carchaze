/**
 * Use EventListener Hook
 * @module 🔗:hooks/useEventListener
 * 
 * @author Hamza Hussain <hamzahussain@carchaze.com>
 * @version 0.1.0
 * @description Use EventListener Hook use to access different type of event listeners for different elements or overall window
 * 
 */

import React, { useEffect, useRef } from "react"

/**
 * @callback VoidCallback
 * @param {any} event
 * @return {any}
 */

/**
 * Use to access different type of event listeners for different elements or overall window
 * 
 * @function
 * @param {string} eventType 
 * @param {VoidCallback} callback 
 * @param {any} [element] 
 * 
 * @example
 * import { useState } from "react"
 * import useEventListener from "./useEventListener"
 * 
 * export default function EventListenerComponent() {
 *   const [key, setKey] = useState("")
 *   useEventListener("keydown", e => {
 *     setKey(e.key)
 *   })
 * 
 *   return <div>Last Key: {key}</div>
 * }
 */
export default function useEventListener(
  eventType,
  callback,
  element = window
) {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (element == null) return
    const handler = e => callbackRef.current(e)
    element.addEventListener(eventType, handler)

    return () => element.removeEventListener(eventType, handler)
  }, [eventType, element])
}

