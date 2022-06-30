// 根据数字以每四位数字的位数为单位 输出数字 + 单位

var numberFormat = function (value) {
  var param = {};
  var k = 10000,
    sizes = ['个', '万个', '亿个'],
    i;
  if (value < k) {
    param.value = value
    param.unit = ''
  } else {
    i = Math.floor(Math.log(value) / Math.log(k));
    param.value = ((value / Math.pow(k, i))).toFixed(2);
    param.unit = sizes[i];
  }
  return param;
}