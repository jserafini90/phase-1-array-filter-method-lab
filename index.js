function findMatching(array, string){
    return array.filter(array => array.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(array, string){
    return array.filter(array => array.startsWith(string))
}

function matchName(array, string){
    return array.filter(array => array.name === string)
}