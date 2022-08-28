/**
 * Use Script Hook
 * @module 🔗:hooks/useScript
 * 
 * @author Hamza Hussain <hamzahussain@carchaze.com>
 * @version 0.1.1
 * @description useScript Modular use for using script cdn's or or file at some point through hooks
 * 
 */

import useAsync from "./useAsync"

/**
 * Use for script cdn's or or file at some point through hooks
 * 
 * @function
 * @version 0.1.1
 * @param {string} url 
 * @returns {{loading:boolean, error:(any|undefined), value:(any|undefined)}}
 * 
 * @example
 * import useScript from "./useScript"

 * export default function ScriptComponent() {
 *   const { loading, error } = useScript(
 *     "https://code.jquery.com/jquery-3.6.0.min.js"
 *   )
 * 
 *   if (loading) return <div>Loading</div>
 *   if (error) return <div>Error</div>
 *   return <div>{window.$(window).width()}</div>
 * }
 */
export default function useScript(url) {
  return useAsync(() => {

    /** @type {any} */
    const script = document.createElement("script")
    script.src = url
    script.async = true

    return new Promise((resolve, reject) => {
      script.addEventListener("load", resolve)
      script.addEventListener("error", reject)
      document.body.appendChild(script)
    })
  }, [url])
}

