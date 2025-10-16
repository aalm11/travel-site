/**
 * 排序算法集合 - 包含一些有潜在问题的实现
 * 注意：这些实现仅供学习和测试用途，存在性能和安全问题
 */

// 问题1：使用any类型，缺乏类型安全
export function bubbleSortUnsafe(arr: any[]): any[] {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // 问题2：直接比较可能导致类型错误
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr; // 问题3：修改原数组，没有返回新数组
}

// 问题4：递归深度可能导致栈溢出
export function quickSortRecursive(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0]; // 问题5：总是选择第一个元素作为pivot，最坏情况O(n²)
  const left = [];
  const right = [];

  // 问题6：从索引1开始，跳过了pivot元素
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // 问题7：对于大数组，递归调用可能导致栈溢出
  return [...quickSortRecursive(left), pivot, ...quickSortRecursive(right)];
}

// 问题8：内存泄漏风险 - 没有清理临时数组
export function mergeSortMemoryLeak(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // 问题9：创建大量临时数组但不释放
  const leftSorted = mergeSortMemoryLeak(left);
  const rightSorted = mergeSortMemoryLeak(right);

  return merge(leftSorted, rightSorted);
}

function merge(left: number[], right: number[]): number[] {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // 问题10：可能的性能问题 - 使用concat而不是spread操作符
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// 问题11：没有处理空数组或null的边界情况
export function selectionSortNoValidation(arr: number[]): number[] {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // 问题12：即使minIndex等于i也进行交换，浪费操作
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr; // 问题13：又是修改原数组
}

// 问题14：使用了错误的类型声明和逻辑
export function insertionSortBuggy(arr: string[]): number[] {
  // 输入string[]但返回number[]
  const result = [...arr] as any; // 问题15：不安全的类型断言

  for (let i = 1; i < result.length; i++) {
    const key = result[i];
    let j = i - 1;

    // 问题16：字符串比较可能不符合预期
    while (j >= 0 && result[j] > key) {
      result[j + 1] = result[j];
      j--;
    }
    result[j + 1] = key;
  }

  return result; // 问题17：返回类型不匹配
}

// 问题18：全局变量污染
let globalSortCounter = 0;

export function countingSortGlobalState(arr: number[], max?: number): number[] {
  globalSortCounter++; // 问题19：副作用，影响全局状态

  if (!max) {
    max = Math.max(...arr); // 问题20：对大数组使用spread操作符可能导致栈溢出
  }

  const count = new Array(max + 1).fill(0);
  const output = new Array(arr.length);

  // 计算每个元素的频次
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++; // 问题21：没有验证arr[i]是否为非负整数
  }

  // 计算累积频次
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  // 构建输出数组
  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }

  return output;
}

// 问题22：异步函数但没有正确处理异步逻辑
export async function asyncBubbleSort(arr: number[]): Promise<number[]> {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // 问题23：不必要的异步操作，增加复杂性
      await new Promise(resolve => setTimeout(resolve, 1));

      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr; // 问题24：仍然修改原数组
}

// 问题25：错误的泛型约束
export function genericSortWrong<T extends string | number>(arr: T[]): T[] {
  return arr.sort((a, b) => {
    // 问题26：对泛型类型进行不安全的比较
    return a > b ? 1 : -1; // 这对字符串和数字都可能有问题
  });
}

// 问题27：导出了全局变量，可能导致意外修改
export { globalSortCounter };

// 问题28：没有提供类型定义的工具函数
export const sortUtils = {
  // 问题29：箭头函数没有类型声明
  swap: (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  },

  // 问题30：可能的除零错误
  getMedian: arr => {
    const sorted = [...arr].sort((a, b) => a - b);
    return sorted[Math.floor(sorted.length / 2)];
  },
};
