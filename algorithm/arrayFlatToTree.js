// 扁平数组转为嵌套数组

// id, parentId为扁平数组内每个对象的属性，通过这两个属性确定嵌套关系

const getData = (treeNodes) => {
  let result = []
  if (!Array.isArray(treeNodes)) {
    return result
  }
  treeNodes.forEach(item => {
    delete item.children;
  });
  let map = {};
  treeNodes.forEach(item => {
    map[item.id] = item;
  });
  treeNodes.forEach(item => {
    let parent = map[item.parentId];
    if (parent) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      result.push(item);
    }
  });
  return result;
}