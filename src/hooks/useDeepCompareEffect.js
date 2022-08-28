/**
 * Use DeepCompareEffect Hook
 * @module 🔗:hooks/useDeepCompareEffect
 * 
 * @author Hamza Hussain <hamzahussain@carchaze.com>
 * @version carchaze@0.1.0
 * @description useDeepCompareEffect Modular use for deep comparison instead of useEffect
 * 
 */

import { useEffect, useRef } from "react"
import isEqual from "lodash/fp/isEqual"

/**
 * @callback VoidCallback
 * @return {any}
 */

/**
 * Use for deep comparison instead of useEffect
 * 
 * @function
 * @param {VoidCallback} callback 
 * @param {Array<any>} dependencies 
 * 
 * @example
 * import { useEffect, useState, useRef } from "react"
 * import useDeepCompareEffect from "./useDeepCompareEffect"
 * 
 * export default function DeepCompareEffectComponent() {
 *   const [age, setAge] = useState(0)
 *   const [otherCount, setOtherCount] = useState(0)
 *   const useEffectCountRef = useRef()
 *   const useDeepCompareEffectCountRef = useRef()
 * 
 *   const person = { age: age, name: "My name" }
 * 
 *   useEffect(() => {
 *     useEffectCountRef.current.textContent =
 *       parseInt(useEffectCountRef.current.textContent) + 1
 *   }, [person])
 * 
 *   useDeepCompareEffect(() => {
 *     useDeepCompareEffectCountRef.current.textContent =
 *       parseInt(useDeepCompareEffectCountRef.current.textContent) + 1
 *   }, [person])
 * 
 *   return (
 *     <div>
 *       <div>
 *         useEffect: <span ref={useEffectCountRef}>0</span>
 *       </div>
 *       <div>
 *         useDeepCompareEffect: <span ref={useDeepCompareEffectCountRef}>0</span>
 *       </div>
 *       <div>Other Count: {otherCount}</div>
 *       <div>{JSON.stringify(person)}</div>
 *       <button onClick={() => setAge(currentAge => currentAge + 1)}>
 *         Increment Age
 *       </button>
 *       <button onClick={() => setOtherCount(count => count + 1)}>
 *         Increment Other Count
 *       </button>
 *     </div>
 *   )
 * }
 */
export default function useDeepCompareEffect(callback, dependencies) {
  /** @type {any} */
  const currentDependenciesRef = useRef()

  if (!isEqual(currentDependenciesRef.current, dependencies)) {
    currentDependenciesRef.current = dependencies
  }

  useEffect(callback, [currentDependenciesRef.current])
}
