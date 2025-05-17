/* eslint-disable no-plusplus */
/* eslint-disable no-continue */
/**
 * 타겟 넘버
 * https://school.programmers.co.kr/learn/courses/30/lessons/43165
 *
 * 문제 설명
 * n개의 음이 아닌 정수가 있습니다. 이 수를 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.
 * -1+1+1+1+1 = 3
 * +1-1+1+1+1 = 3
 * +1+1-1+1+1 = 3
 * +1+1+1-1+1 = 3
 * +1+1+1+1-1 = 3
 * 사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 완성해주세요.
 */

const solution = (numbers, target) => {
  let count = 0;
  const queue = [{ idx: 0, sum: 0 }];

  while (queue.length > 0) {
    const { idx, sum } = queue.shift();
    if (idx === numbers.length) {
      count += sum === target ? 1 : 0;
      continue;
    }

    const bfs = () => {
      queue.push({ idx: idx + 1, sum: sum + numbers[idx] });
      queue.push({ idx: idx + 1, sum: sum - numbers[idx] });
    };

    bfs();
  }

  return count;
};

const solution = (numbers, target) => {
  let count = 0;
  const queue = [{ index: 0, sum: 0 }];
  let head = 0;

  while (head < queue.length) {
    const { index, sum } = queue[head++];

    if (index === numbers.length) {
      if (sum === target) count++;
      continue;
    }

    queue.push({ index: index + 1, sum: sum + numbers[index] });
    queue.push({ index: index + 1, sum: sum - numbers[index] });
  }

  return count;
};

const numbers = [1, 1, 1, 1, 1];
const target = 3;
console.log(solution(numbers, target));
