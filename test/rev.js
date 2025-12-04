/**
 * Word Break II (Recursive Solution)
 * 
 * Given a string s and a dictionary of words wordDict, return all possible sentences 
 * where each word is a valid dictionary word. You may reuse words in the dictionary.
 * 
 * Example:
 * Input: s = "catsandcatsdog", wordDict = ["cat","cats","and","sand","dog"]
 * Output: ["cats and cats dog","cat and cats dog"]
 */

function wordBreak(s, wordDict) {
    const result = [];
    const wordSet = new Set(wordDict);
    
    function backtrack(index, currentSentence) {
        // Base case: reached end of string
        if (index === s.length) {
            result.push(currentSentence.trim());
            return;
        }
        
        // Try all possible words starting from current index
        for (let i = index + 1; i <= s.length; i++) {
            const word = s.substring(index, i);
            
            // If word exists in dictionary, continue recursion
            if (wordSet.has(word)) {
                backtrack(i, currentSentence + word + " ");
            }
        }
    }
    
    backtrack(0, "");
    return result;
}

// Test cases
console.log(wordBreak("catsandcatsdog", ["cat","cats","and","sand","dog"]));
// Output: ["cats and cats dog","cat and cats dog"]

console.log(wordBreak("pineapplepenapple", ["apple","pen","applepen","pine","pineapple"]));
// Output: ["pine apple pen apple","pineapple pen apple","pine applepen apple"]

console.log(wordBreak("a", ["a"]));
// Output: ["a"]