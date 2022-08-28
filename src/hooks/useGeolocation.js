/**
 * Use Geolocation Hook
 * @module 🔗:hooks/useGeolocation
 *
 * @author Hamza Hussain <hamzahussain@carchaze.com>
 * @version carchaze@0.1.0
 * @description Geolocation Modular, Will give you the location of yours
 */

import {useState, useEffect} from 'react';

/**
 * Will give you the location of yours
 *
 * @function
 * @param {{enableHighAccuracy: (boolean | undefined), maximumAge: (number | undefined), timeout: (number | undefined)}} [options]
 *
 * @example
 * import useGeolocation from "./useGeolocation"
 *
 * export default function GeolocationComponent() {
 *   const {
 *     loading,
 *     error,
 *     data: { latitude, longitude },
 *   } = useGeolocation()
 *
 *   return (
 *     <>
 *       <div>Loading: {loading.toString()}</div>
 *       <div>Error: {error?.message}</div>
 *       <div>
 *         {latitude} x {longitude}
 *       </div>
 *     </>
 *   )
 * }
 */
export default function useGeolocation(options) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  /** @type {any} */
  const [data, setData] = useState({});

  useEffect(() => {
    const successHandler = e => {
      setLoading(false);
      setError(null);
      setData(e.coords);
    };
    const errorHandler = e => {
      setError(e);
      setLoading(false);
    };
    navigator.geolocation.getCurrentPosition(
      successHandler,
      errorHandler,
      options,
    );
    const id = navigator.geolocation.watchPosition(
      successHandler,
      errorHandler,
      options,
    );
    return () => navigator.geolocation.clearWatch(id);
  }, [options]);

  return {loading, error, data};
}
