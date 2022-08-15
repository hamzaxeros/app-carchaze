/**
 * Use DebugInformation Hook
 * @module 🔗:hooks/useDebugInformation
 * 
 * @author Hamza Hussain <hamzahussain@carchaze.com>
 * @version 0.1.0
 * @description DebugInformation Modular use for to debug any info whether its node based or react component based
 * 
 */

import { useEffect, useRef } from "react"
import useRenderCount from "./useRenderCount"

/**
 * Use for to debug any info whether its node based or react component based
 * 
 * @function
 * @param {any} componentName 
 * @param {any} props 
 * @returns {any}
 * 
 * @example
 * import useDebugInformation from "./useDebugInformation"
 * import useToggle from "./useToggle"
 * import { useState } from "react"
 * 
 * export default function DebugInformationComponent() {
 *   const [boolean, toggle] = useToggle(false)
 *   const [count, setCount] = useState(0)
 * 
 *   return (
 *     <>
 *       <ChildComponent boolean={boolean} count={count} />
 *       <button onClick={toggle}>Toggle</button>
 *       <button onClick={() => setCount(prevCount => prevCount + 1)}>
 *         Increment
 *       </button>
 *     </>
 *   )
 * }
 * 
 * function ChildComponent(props) {
 *   const info = useDebugInformation("ChildComponent", props)
 * 
 *   return (
 *     <>
 *       <div>{props.boolean.toString()}</div>
 *       <div>{props.count}</div>
 *       <div>{JSON.stringify(info, null, 2)}</div>
 *     </>
 *   )
 * }
 */
export default function useDebugInformation(componentName, props) {
  const count = useRenderCount()
  const changedProps = useRef({})
  const previousProps = useRef(props)
  const lastRenderTimestamp = useRef(Date.now())

  const propKeys = Object.keys({ ...props, ...previousProps })
  changedProps.current = propKeys.reduce((obj, key) => {
    if (props[key] === previousProps.current[key]) return obj
    return {
      ...obj,
      [key]: { previous: previousProps.current[key], current: props[key] },
    }
  }, {})
  const info = {
    count,
    changedProps: changedProps.current,
    timeSinceLastRender: Date.now() - lastRenderTimestamp.current,
    lastRenderTimestamp: lastRenderTimestamp.current,
  }

  useEffect(() => {
    previousProps.current = props
    lastRenderTimestamp.current = Date.now()
    console.log("[debug-info]", componentName, info)
  })

  return info
}
