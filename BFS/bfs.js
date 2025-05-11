/* 그래프 상태
     A
   /   \
  B     C
 / \   /
D   E F
*/

const bfs = (graph, node) => {
  const visited = new Set([node]);
  const queue = [node];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    console.log(currentNode);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
};

const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B'],
  F: ['C'],
};

bfs(graph, 'A');

// 예상 결과 : A B C D E F
