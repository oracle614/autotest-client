/**
 * Json转对象
 */
export function toObj(data) {
  return JSON.parse(data)
}

/**
 * 对象转Json
 */
export function toJson(data) {
  return JSON.stringify(data)
}
