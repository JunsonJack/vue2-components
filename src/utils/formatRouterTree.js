/**
 * 将后端传来的路由列表树形结构化
 */

import data from '../mock/data'

formatRouterTree(data)

function formatRouterTree (data) {
  // 现将总结点分离，其余都当做子节点
  let parent = data.filter(p => p.pid === 0),
    children = data.filter(c => c.pid !== 0)

  dataToTree(parent, children)
  console.log(parent)

  function dataToTree (parent, children) {
    parent.map(p => {
      children.map((c, i) => {
        if (c.pid === p.id) {
          let _c = JSON.parse(JSON.stringify(children)) //深拷贝--保存一份children
          _c.splice(i, 1) //删除自己保留其他children
          dataToTree([c], _c)  //剩余的继续递归

          if (p.children) {
            p.children.push(c)
          } else {
            p.children = [c]
          }
        }
      })
    })
  }

  return parent
}