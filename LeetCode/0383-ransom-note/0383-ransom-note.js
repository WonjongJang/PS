/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = new Map();

    for (m of magazine) {
        if (map.get(m)) {
            map.set(m, map.get(m) + 1)
        } else {
            map.set(m, 1)
        }
    }

    for (r of ransomNote) {
        if (map.get(r)) {
            map.set(r, map.get(r) - 1)
        } else {
            return false
        }
    }

    return true
};