/**
 * Use OnlineStatus Hook
 * @module 🔗:hooks/useOnlineStatus
 *
 * @author Hamza Hussain <hamzahussain@carchaze.com>
 * @version carchaze@0.1.0
 * @description OnlineStatus Modular, To check is some one is in your application or not
 *
 */

import { useState } from "react"
import useEventListener from "./useEventListener"

/**
 * To check is some one is in your application or not
 * 
 * @function
 * @returns {boolean}
 * 
 * @example
 * import useOnlineStatus from "./useOnlineStatus"
 * 
 * export default function OnlineStatusComponent() {
 *   const online = useOnlineStatus()
 * 
 *   return <div>{online.toString()}</div>
 * }
 */
export default function useOnlineStatus() {
  const [online, setOnline] = useState(navigator.onLine)

  useEventListener("online", () => setOnline(navigator.onLine))
  useEventListener("offline", () => setOnline(navigator.onLine))

  return online
}
