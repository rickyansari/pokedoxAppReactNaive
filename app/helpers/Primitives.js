const ZERO = 0;

function isObject(arg) {
  return typeof arg === 'object' && !isNull(arg) && !isArray(arg);
}

function isEmptyObject(arg) {
  return isObject(arg) && Object.keys(arg).length === ZERO;
}

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isString(arg) {
  return typeof arg === 'string';
}

function isArray(arg) {
  return Array.isArray(arg);
}

function isEmptyArray(arg) {
  return isArray(arg) && arg.length === ZERO;
}

function isNull(arg) {
  return arg === null;
}

function isUndefined(arg) {
  return arg === void ZERO;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export {
  isArray,
  isEmptyArray,
  isEmptyObject,
  isFunction,
  isNull,
  isNumber,
  isObject,
  isString,
  isUndefined,
  capitalize,
};
