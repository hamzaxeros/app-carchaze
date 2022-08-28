/**
 * Use Size Hook
 * @module 🔗:hooks/useSize
 *
 * @author Hamza Hussain <hamzahussain@carchaze.com>
 * @version carchaze@0.1.0
 * @description Size Modular, It will gave you the size of passed ref
 *
 */

import {useState, useEffect} from 'react';

/**
 * It will gave you the size of passed ref
 *
 * @function
 * @param {any} ref
 * @returns {any}
 *
 * @example
 * import { useRef } from "react"
 * import useSize from "./useSize"
 *
 * export default function SizeComponent() {
 *   const ref = useRef()
 *   const size = useSize(ref)
 *
 *   return (
 *     <>
 *       <div>{JSON.stringify(size)}</div>
 *       <textarea ref={ref}></textarea>
 *     </>
 *   )
 * }
 */
export default function useSize(ref) {
  const [size, setSize] = useState({});

  useEffect(() => {
    if (ref.current == null) return;
    const observer = new ResizeObserver(([entry]) =>
      setSize(entry.contentRect),
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return size;
}
