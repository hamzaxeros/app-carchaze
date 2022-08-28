/**
 * Use Array Hook
 * @module 🔗:hooks/useArray
 * 
 * @author Hamza Hussain <hamzahussain@carchaze.com>
 * @version carchaze@0.1.0
 * @description use Array hooks have a some basic built-in functionality, that you play with in your component
 * 
 */

import { useState } from "react"

/**
 * @callback PushCallback
 * @param {any} element
 * @return {void}
 */

/**
 * @callback FilterCallback
 * @param {any} [callback]
 * @return {void}
 */

/**
 * @callback UpdateCallback
 * @param {number} index
 * @param {any} newElement
 * @return {void}
 */

/**
 * @callback RemoveCallback
 * @param {number} index
 * @return {void}
 */

/**
 * @callback ClearCallback
 * @return {void}
 */

/**
 * use Array hooks have a some basic built-in functionality, that you play with in your component
 * 
 * @function
 * @param {Array<any>} defaultValue 
 * @returns {{
 * array:Array<any>, 
 * set:React.Dispatch<React.SetStateAction<any[]>>,
 * push: PushCallback,
 * filter: FilterCallback,
 * update: UpdateCallback,
 * remove: RemoveCallback,
 * clear: ClearCallback
 * }}
 * 
 * @example
 * import useArray from "./useArray"
 * 
 * export default function ArrayComponent() {
 *   const { array, set, push, remove, filter, update, clear } = useArray([
 *     1, 2, 3, 4, 5, 6,
 *   ])
 * 
 *   return (
 *     <div>
 *       <div>{array.join(", ")}</div>
 *       <button onClick={() => push(7)}>Add 7</button>
 *       <button onClick={() => update(1, 9)}>Change Second Element To 9</button>
 *       <button onClick={() => remove(1)}>Remove Second Element</button>
 *       <button onClick={() => filter(n => n < 3)}>
 *         Keep Numbers Less Than 4
 *       </button>
 *       <button onClick={() => set([1, 2])}>Set To 1, 2</button>
 *       <button onClick={clear}>Clear</button>
 *     </div>
 *   )
 * }
 * 
 */
export default function useArray(defaultValue) {
  const [array, setArray] = useState(defaultValue)

  function push(element) {
    setArray(a => [...a, element])
  }

  function filter(callback) {
    setArray(a => a.filter(callback))
  }

  function update(index, newElement) {
    setArray(a => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length),
    ])
  }

  function remove(index) {
    setArray(a => [...a.slice(0, index), ...a.slice(index + 1, a.length)])
  }

  function clear() {
    setArray([])
  }

  return { array, set: setArray, push, filter, update, remove, clear }
}
