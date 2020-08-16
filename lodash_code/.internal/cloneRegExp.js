/** Used to match `RegExp` flags from their coerced string values. */
const reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  const result = new regexp.constructor(regexp.source, reFlags.exec(regexp)); // 根据标识符创建新的正则
  result.lastIndex = regexp.lastIndex;
  return result;
}

export default cloneRegExp;
