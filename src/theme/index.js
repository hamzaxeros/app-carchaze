import _colors from "./colors"
import _typography from "./typography"
import _effects from "./effects"

// // Configuration
// const theme = new (class {
//   current = "default"
// })

// Setting up
const colors = _colors["default"]
const typography = _typography["default"]
const effects = _effects["default"]

// Export
export {
  colors,
  typography,
  effects
}
export * from "./styles"
export * from "./storage"
