/* 그래프 상태          
     A
   /   \
  B     C
 / \   /
D   E F
*/

const dfs = (graph, node, visited = new Set()) => {
  visited.add(node);
  console.log(node);

  graph[node].forEach((neighbor) => {
    if(!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  })
}

const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B'],
  F: ['C'],
};

dfs(graph, 'A');