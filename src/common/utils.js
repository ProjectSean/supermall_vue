export function debounce(func, delay) {
  let timer = null
  return function (...args) {
    let context = this;
    let args = arguments;
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.call(context, args)
    }, delay)
  }
}