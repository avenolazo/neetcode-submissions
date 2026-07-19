class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
            const counter = new Map<number, number>();
            for(let i = 0; i < nums.length; i++){
            let currentVal = nums[i];
                const change = target - currentVal;
                    if(counter.has(change)){
                        return [counter.get(change), i]
                    }
                counter.set(nums[i], i);
            }
        return [];
        }
    }
