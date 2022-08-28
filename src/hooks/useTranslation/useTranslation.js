/**
 * Use Translation Hook
 * @module 🔗:hooks/useTranslation
 * 
 * @author Hamza Hussain <hamzahussain@carchaze.com>
 * @version carchaze@0.1.0
 * @description Translation Modular, use for translation this pkg only use for web based apps
 * 
 */

import { useLocalStorage } from "../useStorage"
import * as translations from "./translations"

/**
 * @callback CallbackFunc
 * @param {string} value
 * @return {void}
 */

/**
 * Use for translation this pkg only use for web based apps
 * 
 * @function
 * @returns {{language:string, setLanguage: CallbackFunc, fallbackLanguage: string, setFallbackLanguage: CallbackFunc, t: CallbackFunc}}
 * 
 * @example
 * import useTranslation from "./useTranslation"
 * 
 * export default function TranslationComponent() {
 *   const { language, setLanguage, setFallbackLanguage, t } = useTranslation()
 * 
 *   return (
 *     <>
 *       <div>{language}</div>
 *       <div>{t("hi")}</div>
 *       <div>{t("bye")}</div>
 *       <div>{t("nested.value")}</div>
 *       <button onClick={() => setLanguage("sp")}>Change To Spanish</button>
 *       <button onClick={() => setLanguage("en")}>Change To English</button>
 *       <button onClick={() => setFallbackLanguage("sp")}>Change FB Lang</button>
 *     </>
 *   )
 * }
 */
export default function useTranslation() {
  const [language, setLanguage] = useLocalStorage("language", "en")
  const [fallbackLanguage, setFallbackLanguage] = useLocalStorage(
    "fallbackLanguage",
    "en"
  )

  const translate = key => {
    const keys = key.split(".")

    return (
      getNestedTranslation(language, keys) ??
      getNestedTranslation(fallbackLanguage, keys) ??
      key
    )
  }

  return {
    language,
    setLanguage,
    fallbackLanguage,
    setFallbackLanguage,
    t: translate,
  }
}

function getNestedTranslation(language, keys) {
  return keys.reduce((obj, key) => {
    return obj?.[key]
  }, translations[language])
}
