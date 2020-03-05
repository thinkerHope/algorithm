// DFS (深度优先搜索)
const log = () => console.log.apply(console, arguments)

const vexNum
// [0...n]
const vertices = Array.from(new Array(vexNum).keys())
const visited = new Array(vexNum).fill(false)
// 初始化矩阵
const arcs = []
for (let i = 0; i < vexNum; i++) {
  arcs[i] = []
  for (let j = 0; j < vexNum; j++) {
    arcs[i][j] = 0
  }
}

DFS(0)

const DFS = v => {
  visited[v] = true
  log(`结点: ${vertices[v]}`)

  for (let i = 0; i < vexNum; i++) {
    if (arcs[v][i] && !visited[i]) {
      DFS(i)
    }
  }
}