/**
 * Use StateWithValidation Hook
 * @module 🔗:hooks/useStateWithValidation
 * 
 * @author Hamza Hussain <hamzahussain@carchaze.com>
 * @version carchaze@0.1.0
 * @description StateWithValidation Modular, Work like normal state, but here you can directly validate your state through callback function
 * 
 */

import { useState, useCallback } from "react"

/**
 * @callback CallbackFunc
 * @param {any} value
 * @return {any}
 */

/**
 * Work like normal state, but here you can directly validate your state through callback function
 * 
 * @function
 * @param {CallbackFunc} validationFunc 
 * @param {any} initialValue 
 * @returns {Array<any>}
 * 
 * @example
 * import useStateWithValidation from "./useStateWithValidation"
 * 
 * export default function StateWithValidationComponent() {
 *   const [username, setUsername, isValid] = useStateWithValidation(
 *     name => name.length > 5,
 *     ""
 *   )
 * 
 *   return (
 *     <>
 *       <div>Valid: {isValid.toString()}</div>
 *       <input
 *         type="text"
 *         value={username}
 *         onChange={e => setUsername(e.target.value)}
 *       />
 *     </>
 *   )
 * }
 */
export default function useStateWithValidation(validationFunc, initialValue) {
  const [state, setState] = useState(initialValue)
  const [isValid, setIsValid] = useState(() => validationFunc(state))

  const onChange = useCallback(
    nextState => {
      const value =
        typeof nextState === "function" ? nextState(state) : nextState
      setState(value)
      setIsValid(validationFunc(value))
    },
    [validationFunc]
  )

  return [state, onChange, isValid]
}
