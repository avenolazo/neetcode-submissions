class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
            const cashCounter = new Map<number, number>();
            for(let i = 0; i < nums.length; i++){
                let currentVal = nums[i];
                let change = target - currentVal;
                    if(cashCounter.has(change)){
                        return [cashCounter.get(change), i]
                    }
                cashCounter.set(currentVal, i)    
            }
        return [];
        }
    }
