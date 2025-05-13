/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-continue */
/**
 * 네트워크
 * https://school.programmers.co.kr/learn/courses/30/lessons/43162
 *
 * 문제 설명
 * 네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다.
 * 예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고, 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다.
 * 따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있습니다.
 * 컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때, 네트워크의 개수를 return 하도록 solution 함수를 완성해주세요.
 */

const solution = (n, computers) => {
  let count = 0;
  const visited = Array(n).fill(false);

  const dfs = (i) => {
    visited[i] = true;

    for (let j = 0; j < n; j++) {
      if (computers[i][j] === 1 && !visited[j]) {
        dfs(j);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      count++;
      dfs(i);
    }
  }

  return count;
};

const n = 3;
const computers = [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
];
console.log(solution(n, computers));
