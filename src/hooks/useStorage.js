/**
 * Use Storage Hook
 * @module 🔗:hooks/useStorage
 * 
 * @author Hamza Hussain <hamzahussain@carchaze.com>
 * @version 0.1.0
 * @description useStorage Modular use like state, but it also save it in storage for cache
 * 
 */

import { useCallback, useState, useEffect } from "react"

/**
 * @callback VoidFunction
 * @return {void}
 */

/**
 * Use like useState, but it save your data in cache while using Local Storage
 * 
 * @function
 * @param {string} key 
 * @param {any} defaultValue 
 * @returns {Array<any | React.Dispatch<any> | VoidFunction>}
 * 
 * @example
 * import { useLocalStorage } from "./useStorage"
 * 
 * export default function StorageComponent() {
 *   const [age, setAge, removeAge] = useLocalStorage("age", 26)
 * 
 *   return (
 *     <div>
 *       <div>{age}</div>
 *       <button onClick={() => setAge(40)}>Set Age</button>
 *       <button onClick={removeAge}>Remove Age</button>
 *     </div>
 *   )
 * }
 * 
 */
export function useLocalStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.localStorage)
}

/**
 *  Use like useState, but it save your data in cache while using Session Storage
 * 
 * @function
 * @param {string} key 
 * @param {any} defaultValue 
 * @returns {Array<any | React.Dispatch<any> | VoidFunction>}
 * 
 * @example 
 * import { useSessionStorage } from "./useStorage"
 * 
 * export default function StorageComponent() {
 *   const [name, setName, removeName] = useSessionStorage("name", "My Name")
 * 
 *   return (
 *     <div>
 *       <div>{age}</div>
 *       <button onClick={() => setName("Another Name")}>Set Name</button>
 *       <button onClick={removeName}>Remove Name</button>
 *     </div>
 *   )
 * }
 * 
 */
export function useSessionStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.sessionStorage)
}

/**
 * @function
 * @param {string} key 
 * @param {any} defaultValue 
 * @param {any} storageObject 
 * @returns {Array<any | React.Dispatch<any> | VoidFunction>}
 */
function useStorage(key, defaultValue, storageObject) {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key)
    if (jsonValue != null) return JSON.parse(jsonValue)

    if (typeof defaultValue === "function") {
      return defaultValue()
    } else {
      return defaultValue
    }
  })

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key)
    storageObject.setItem(key, JSON.stringify(value))
  }, [key, value, storageObject])

  const remove = useCallback(() => {
    setValue(undefined)
  }, [])

  return [value, setValue, remove]
}
