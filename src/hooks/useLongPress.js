/**
 * Use LongPress Hook
 * @module 🔗:hooks/useLongPress
 * 
 * @author Hamza Hussain <hamzahussain@carchaze.com>
 * @version carchaze@0.1.0
 * @description LongPress Modular, To click or press after long time, through given time in options
 * 
 */

import useEventListener from "./useEventListener"
import useTimeout from "./useTimeout"
import useEffectOnce from "./useEffectOnce"

/**
 * @callback VoidCallback
 * @return {void}
 */

/**
 * To click or press after long time, through given time in options
 * 
 * @function
 * @param {any} ref 
 * @param {VoidCallback} cb 
 * @param {{delay: (undefined | number)}} [options] 
 * 
 * @example
 * import { useRef } from "react"
 * import useLongPress from "./useLongPress"
 * 
 * export default function LongPressComponent() {
 *   const elementRef = useRef()
 *   useLongPress(elementRef, () => alert("Long Press"))
 * 
 *   return (
 *     <div
 *       ref={elementRef}
 *       style={{
 *         backgroundColor: "red",
 *         width: "100px",
 *         height: "100px",
 *         position: "absolute",
 *         top: "calc(50% - 50px)",
 *         left: "calc(50% - 50px)",
 *       }}
 *     />
 *   )
 * }
 */
export default function useLongPress(ref, cb, { delay = 250 } = {}) {
  const { reset, clear } = useTimeout(cb, delay)
  useEffectOnce(clear)

  useEventListener("mousedown", reset, ref.current)
  useEventListener("touchstart", reset, ref.current)

  useEventListener("mouseup", clear, ref.current)
  useEventListener("mouseleave", clear, ref.current)
  useEventListener("touchend", clear, ref.current)
}
