/**
 * Use ClickOutside Hook
 * @module 🔗:hooks/useClickOutside
 *
 * @author Hamza Hussain <hamzahussain@carchaze.com>
 * @version 0.1.0
 * @description ClickOutside Modular, It will access the ref, if clicked outside of that ref it will run the function of callback which you passed
 *
 */

import useEventListener from "./useEventListener"

/**
 * @callback VoidCallback
 * @param {any} event
 * @return {void}
 */

/**
 * It will access the ref, if clicked outside of that ref it will run the function of callback which you passed
 * 
 * @function
 * @param {any} ref 
 * @param {VoidCallback} cb 
 * 
 * @example
 * import { useRef, useState } from "react"
 * import useClickOutside from "./useClickOutside"
 * 
 * export default function ClickOutsideComponent() {
 *   const [open, setOpen] = useState(false)
 *   const modalRef = useRef()
 * 
 *   useClickOutside(modalRef, () => {
 *     if (open) setOpen(false)
 *   })
 * 
 *   return (
 *     <>
 *       <button onClick={() => setOpen(true)}>Open</button>
 *       <div
 *         ref={modalRef}
 *         style={{
 *           display: open ? "block" : "none",
 *           backgroundColor: "blue",
 *           color: "white",
 *           width: "100px",
 *           height: "100px",
 *           position: "absolute",
 *           top: "calc(50% - 50px)",
 *           left: "calc(50% - 50px)",
 *         }}
 *       >
 *         <span>Modal</span>
 *       </div>
 *     </>
 *   )
 * }
 */
export default function useClickOutside(ref, cb) {
  useEventListener(
    "click",
    e => {
      if (ref.current == null || ref.current.contains(e.target)) return
      cb(e)
    },
    document
  )
}
