// first ...args takes multiple arguments and turns them into an array
// seconds ...args spreads array back out as arguments into bind
export const partial = (fn, ...args) => fn.bind(null, ...args);

const _pipe = (fn, fn2) => (...args) => fn2(fn(...args));

export const pipe = (...fns) => fns.reduce(_pipe);