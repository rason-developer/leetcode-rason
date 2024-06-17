/*
Given a string s, find the length of the longest substring
 without repeating characters.
*/

var lengthOfLongestSubstring = function(s) {
    let charSet = new Set(); // Step 1
   let left = 0; // Step 2
   let maxLength = 0; // Step 3

   for (let right = 0; right < s.length; right++) { // Step 4
        
       while (charSet.has(s[right])) { // Step 5
           charSet.delete(s[left]); // Step 6
           left++; // Step 7
       }
       charSet.add(s[right]); // Step 8
       maxLength = Math.max(maxLength, right - left + 1); // Step 9
   }

   return maxLength; // Step 10
};

console.log(lengthOfLongestSubstring("abcabcbb"));