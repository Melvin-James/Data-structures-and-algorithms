const strs = ["eat","tea","tan","ate","nat","bat"];

function groupAnagrams(strs){
    const result = [];
    const map = new Map();

    for(let word of strs){
        let key = word.split('').sort().join('');

        if(!map[key]){
            map[key] = [];
        }

        map[key].push(word);
    }
    //console.log(map);
    return Object.values(map);
}

console.log(groupAnagrams(strs));
