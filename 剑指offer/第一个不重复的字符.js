// 第一个不重复
function FirstNotRepeatingChar(str)
{
    let str_map = new Map();
    for (let i = 0; i < str.length; i++) {
        if (str_map.has(str[i])) {
            str_map.set(str[i], str_map.get(str[i]) + 1);
        } else {
            str_map.set(str[i], 1);
        }
    }
    for (let j = 0; j < str.length; j++) {
        if (str_map.get(str[j]) == 1) {
            return j;
        } 
    }
    return -1;
}



// 第一个重复
function FirstRepeatingChar(str)
{
    let pre_set = new Set();
    let i = 0;
    for (; i < str.length; i++) {
        pre_set.add(str[i]);
        if (pre_set.size < i + 1) {
            break;
        }
    }
    if (pre_set.size == str.length) return -1;
    else return [...pre_set].indexOf(str[i]);
}