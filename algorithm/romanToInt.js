// Question:
// 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
// 分别代表：1，5，10，50，100，500，1000。
// 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。
// 数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。
// 这个特殊的规则只适用于以下六种情况：
// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
// 给定一个罗马数字，将其转换成整数。

const romanToInt = (s) => {

  let result = 0

  // 每次检索到以下组合，均减小该罗马数字代表的位数的两倍，
  // 因为在后来的遍历且增值时以下组合的值会多计算该罗马数字代表的位数的两倍

  if (s.includes('IV') || s.includes('IX')) result -= 2
  if (s.includes('XL') || s.includes('XC')) result -= 20
  if (s.includes('CD') || s.includes('CM')) result -= 200

  // 例如： "IV"为 "I" + "V",罗马数字代表4，而下面的循环遍历过程中赋值为 "1+5" = "6"

  for (let c of s) {
    switch (c) {
      case "I":
        result += 1; break;
      case "V":
        result += 5; break;
      case "X":
        result += 10; break;
      case "L":
        result += 50; break;
      case "C":
        result += 100; break;
      case "D":
        result += 500; break;
      case "M":
        result += 1000; break;
    }
  }
  return result
};