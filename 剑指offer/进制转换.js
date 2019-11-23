function NumberOf1(n)
{
    if (n === 0) return 0;
    let count = 0;
    
    for (let i = 0; i < 32; i++) {
        if ((n >> i & 1) === 1){  // 右移并与1进行&运算
            count++;
        }
    }
    
    return count;
}