// BFS (广度优先搜索)
const log = () => console.log.apply(console, arguments)
// [0...n]
const vertices = []
const arcs = []
const vexNum = vertices.length
const visited = new Array(vexNum).fill(false)
// 初始化矩阵
for (let i = 0; i < vexNum; i++) {
  arcs[i] = []
  for (let j = 0; j < vexNum; j++) {
    arcs[i][j] = 0
  }
}

const BFS = () => {
  const queue = []
  queue.push(vertices[0])
  visited[0] = true
  log('结点', vertices[0])
  while (queue.length) {
    const u = queue.shift()
    for (let i = 0; i < vexNum; i++) {
      if (arc[u][i] && !visited[i]) {
        queue.push(vertices[i])
        visited[vertices[i]] = true
        log('结点', vertices[i])
      }
    }
  }
}


