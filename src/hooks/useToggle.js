/**
 * Use Toggler Hook
 * @module 🔗:hooks/useToggle
 * 
 * @author Hamza Hussain <hamzahussain@carchaze.com>
 * @version carchaze@0.1.0
 * @description Toggler module for toggling something with boolean hook
 *
 */
import { useState } from "react"

/**
 * @callback SetStateCallback
 * @param {any} value
 * @return {void}
 */

/**
 * Toggle the state with boolean hook, default value will false
 * 
 * @function
 * @param {boolean} defaultValue Pass Toggler  Default value
 * @returns {Array<(boolean | SetStateCallback)>}
 * 
 * @example
 * import useToggle from "./useToggle"
 *
 * export default function ToggleComponent() {
 *   const [value, toggleValue] = useToggle(false)
 *   
 *   return (
 *     <div>
 *       <div>{value.toString()}</div>
 *       <button onClick={toggleValue}>Toggle</button>
 *       <button onClick={() => toggleValue(true)}>Make True</button>
 *       <button onClick={() => toggleValue(false)}>Make False</button>
 *     </div>
 *   )
 * }
 * 
 */
export default function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue)

  function toggleValue(value) {
    setValue(currentValue =>
      typeof value === "boolean" ? value : !currentValue
    )
  }

  return [value, toggleValue]
}
