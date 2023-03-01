
//### HASH TABLE / HASH PAIR EXAMPLES ###
// var isAnagram = function(s, t) {
//     if(s.length != t.length) return false;
//     const sCount = {};
//     const tCount = {};
//     const N = s.lenght;
//     for(let i=0; i < N; i++){
//         if(!sCount[s[i]]) sCount[s[i]] == 0;
//         if(!tCount[t[i]]) tCount[t[i]] == 0;
//         sCount[s[i]]++;
//         tCount[t[i]]++;
//     }
//     console.log(s, sCount);
//     console.log(t, tCount);
//     for(let j=0; j<sCount.lenght; j++){
//         if(sCount[j] !== tCount[j]) {
//             return false;
//         }
//     }
//      return true;
// };
// =====================================================================================================================

// // LEET CODE 1 : OPTIMISED HASHSET SOLUTION                                 /////////***IMPORTANT ***/////////
// let nums = [2,11,15,7];
// let target = 9;
// function hope(nums,target){
//     let coo = {};
//     for(let i=0; i<nums.length; i++){
//         let jab = nums[i];
//         let jabpair = target - jab;
//         if(coo[jabpair] !== undefined) return [coo[jabpair] , i];
//         coo[nums[i]] = i;
// }
// }


// console.log(hope(nums, target));

// ===============================================================================================================================

// LEETCODE 49: Group Anagrams   ***AMAZON interview question***


// var groupAnagrams = function(strs) {
//     const res = {};
//     const arr = strs.map(word => word.split("").sort().join(""));
    
//     for(let j=0; j<strs.length; j++){
//         if(!res[arr[j]]){
//             res[arr[j]] = [strs[j]];
//         }
//         else{
//             res[arr[j]].push(strs[j]);
//         }
//     }
//     return Object.values(res);
// };

// =====================================================================================================================