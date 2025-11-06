// LeetCode 56: Merge Intervals
// Difficulty: Medium
// Category: Sorting
// Date: 2025-11-06
// Approach: Sort + Merge overlapping intervals
// Time: O(n log n), Space: O(n)

function mergeIntervals(intervals){
    let sorted = intervals.sort((a,b)=>a[0]-b[0]);
    let merged = [];
    for(let i=0;i<intervals.length;i++){
        let current = intervals[i];
        if(merged.length === 0 || merged[merged.length-1][1] < current[0]){
            merged.push(current);
        }else{
            merged[merged.length-1][1] = Math.max(merged[merged.length-1][1],current[1]);
        }
    }
    return merged;
}
let intervals = [[1,3],[2,6],[8,10],[15,18]];
console.log(mergeIntervals(intervals));