/**
 * String转为Json
 */
export default function strToJson(data) {
  return JSON.parse(data)
}

/**
 * Json转为String
 */
export function jsonToStr(data) {
  return JSON.stringify(data)
}
