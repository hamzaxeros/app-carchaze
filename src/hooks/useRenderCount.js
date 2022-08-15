/**
 * Use RenderCount Hook
 * @module 🔗:hooks/useRenderCount
 * 
 * @author Hamza Hussain <hamzahussain@carchaze.com>
 * @version 0.1.0
 * @description RenderCount Modular, It is use to capture component rendering count cycle
 * 
 */

import { useEffect, useRef } from "react"

/**
 * It is use to capture component rendering count cycle
 * 
 * @function
 * @returns {number}
 * 
 * @example
 * import useRenderCount from "./useRenderCount"
 * import useToggle from "./useToggle"
 * 
 * export default function RenderCountComponent() {
 *   const [boolean, toggle] = useToggle(false)
 * 
 *   const renderCount = useRenderCount()
 * 
 *   return (
 *     <>
 *       <div>{boolean.toString()}</div>
 *       <div>{renderCount}</div>
 *       <button onClick={toggle}>Toggle</button>
 *     </>
 *   )
 * }
 */
export default function useRenderCount() {
  const count = useRef(1)
  useEffect(() => count.current++)
  return count.current
}
