/**
 * @description: 获取两数之和
 * @param {number} num1
 * @param {number} num2
 * @return {*}
 */
export function sum(num1: number, num2: number): number{
  return num1 + num2;
}

/**
 * @description: 数字数组求和
 * @param {Array} nums
 * @return {Promise}
 */
export function calculate(nums: Array<number>): Promise<number>{
  return new Promise<number>(async (resolve) => {
    if (!nums.length) return resolve(0)

    const total = nums.reduce((preValue: number, currValue: number) => preValue + currValue)
    resolve(total)
  })
}

export default {
  sum,
  calculate
}