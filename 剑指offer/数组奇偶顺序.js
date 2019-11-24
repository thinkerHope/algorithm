// - 16ms
function reOrderArray(array)
{
    const len = array.length;
    let cur = 0;
    for (let i = 0; i < len; i++) {
        if (array[cur] % 2 === 0) {
            array.push(array[cur])
            array.splice(cur, 1);
        } else {
            cur++;
        }
    }
    
    return array;
}