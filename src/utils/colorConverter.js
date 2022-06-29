export const hexToRGBA = (hex, opacity= 0.2) =>
  `rgba(${parseInt(hex.slice(-6, -4), 16)},
  ${parseInt(hex.slice(-4, -2), 16)},
  ${parseInt(hex.slice(-2), 16)},
  ${opacity})`
