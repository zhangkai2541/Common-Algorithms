// 文件的最长绝对路径

const lengthLongestPath = (input) => {
  const record = new Map(), n = input.length
  let result = 0
  for (let i = 0; i < n; i++) {
    let level = 0, len = 0, isFile = false
    while (i < n && input.charCodeAt(i) == '\t'.charCodeAt(0)) {
      level++
      i++
    }
    while (i < n && input.charCodeAt(i) != '\n'.charCodeAt(0)) {
      if (input.charCodeAt(i++) == '.'.charCodeAt(0))
        isFile = true
      len++
    }
    record.set(level, len)
    if (isFile) {
      let sum = 0
      for (let j = 0; j <= level; j++)
        sum += record.get(j)
      result = Math.max(result, sum + level)
    }
  }
  return result
};