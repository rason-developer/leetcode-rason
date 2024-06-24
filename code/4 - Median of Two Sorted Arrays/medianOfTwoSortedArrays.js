/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).
*/


var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
       return findMedianSortedArrays(nums2, nums1); // Step 1
   }

   let m = nums1.length; // Step 2
   let n = nums2.length; // Step 3
   let low = 0, high = m; // Step 4

   while (low <= high) { // Step 5
       let partition1 = Math.floor((low + high) / 2); // Step 6
       let partition2 = Math.floor((m + n + 1) / 2) - partition1; // Step 7

       let maxLeft1 = (partition1 === 0) ? -Infinity : nums1[partition1 - 1]; // Step 8
       let minRight1 = (partition1 === m) ? Infinity : nums1[partition1]; // Step 9

       let maxLeft2 = (partition2 === 0) ? -Infinity : nums2[partition2 - 1]; // Step 10
       let minRight2 = (partition2 === n) ? Infinity : nums2[partition2]; // Step 11

       if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) { // Step 12
           if ((m + n) % 2 === 0) { // Step 13
               return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
           } else {
               return Math.max(maxLeft1, maxLeft2); // Step 14
           }
       } else if (maxLeft1 > minRight2) { // Step 15
           high = partition1 - 1;
       } else { // Step 16
           low = partition1 + 1;
       }
   }

   throw new Error("Input arrays are not sorted");
}
console.log(findMedianSortedArrays([1,2,4,4,5],[2,3,4]));