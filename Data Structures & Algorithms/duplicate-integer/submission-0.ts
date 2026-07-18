class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]) : boolean {
        const map = new Map<number, number>();
        for(let num = 0; num < nums.length; num++){
            if(map.get(nums[num]) !== undefined) return true;
            map.set(nums[num], num);
        }
        return false;
    }
}
