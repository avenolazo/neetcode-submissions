class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
            const m = new Map<number, number>();
            for(let i = 0; i < nums.length; i++){
            let currentVal = nums[i];
            let diff = target - currentVal;
            if(m.has(diff)){
                return [m.get(diff),i];
            }
            m.set(nums[i], i);
            }
        return [];
    }
}