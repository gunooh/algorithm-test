/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
/* eslint-disable no-continue */
/**
 * N과 M (1)
 * https://www.acmicpc.net/problem/15649
 *
 * 문제 설명
 * 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.
 * 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
 *
 * 입력
 * 첫째 줄에 자연수 N과 M이 주어진다. (1 ≤ M ≤ N ≤ 8)
 *
 * 출력
 * 한 줄에 하나씩 문제의 조건을 만족하는 수열을 출력한다. 중복되는 수열을 여러 번 출력하면 안되며, 각 수열은 공백으로 구분해서 출력해야 한다.
 * 수열은 사전 순으로 증가하는 순서로 출력해야 한다.
 */

const solution = (n, m) => {
  const set = new Set();
  const visited = Array(n).fill(false);

  const dfs = (arr) => {
    if (arr.length === m) {
      set.add(arr.join(' '));
      return;
    }

    for (let j = 0; j < n; j++) {
      if (!visited[j]) {
        visited[j] = true;
        arr.push(j + 1);
        dfs(arr);
        visited[j] = false;
        arr.pop();
      }
    }
  };

  dfs([]);

  return [...set].join('\n');
};

const n = 5;
const m = 3;
console.log(solution(n, m));

// 1 2 3 4 5
// 1 2 3
// 1 2 4
// 1 2 5
// 1 3 2
// 1 3 4
// 1 3 5
// 1 4 2
// 1 4 3
// 1 4 5
// ...
