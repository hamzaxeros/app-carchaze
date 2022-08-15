/**
 * Use CopyToClipboard Hook
 * @module 🔗:hooks/useCopyToClipboard
 *
 * @author Hamza Hussain <hamzahussain@carchaze.com>
 * @version 0.1.0
 * @description CopyToClipboard Modular, It will copy the text to clipboard and will also return the copied text
 *
 */

import { useState } from "react"
import copy from "copy-to-clipboard"

/**
 * It will copy the text to clipboard and will also return the copied text
 * 
 * @function
 * @returns {Array<any>}
 * 
 * @example
 * import useCopyToClipboard from "./useCopyToClipboard"
 * 
 * export default function CopyToClipboardComponent() {
 *   const [copyToClipboard, { success }] = useCopyToClipboard()
 * 
 *   return (
 *     <>
 *       <button onClick={() => copyToClipboard("This was copied")}>
 *         {success ? "Copied" : "Copy Text"}
 *       </button>
 *       <input type="text" />
 *     </>
 *   )
 * }
 */
export default function useCopyToClipboard() {
  const [value, setValue] = useState()
  const [success, setSuccess] = useState()

  const copyToClipboard = (text, options) => {
    const result = copy(text, options)
    if (result) setValue(text)
    setSuccess(result)
  }

  return [copyToClipboard, { value, success }]
}
