export function hasClass (el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el, className)
}
export function addClass (el, className) {
  if (hasClass(el, className)) {
    return
  } else {
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.class = newClass.join(' ')
  }
}
