// 有1和2的选择，动态规划
// f(n) = f(n-1) + f(n-2)，到最后一步有1或2两种选择。
function jumpFloor(number)
{
    let a = 1, b = 2, c = 3
    if (number == 1) return 1
    if (number == 2) return 2
    for (let i = 0; i < number - 3; i++) {
        a = b
        b = c
        c = a + b
    }
    return c
}

// 变态跳台阶
// f(n) = f(n-1)+f(n-2)+...+f(0)
function jumpFloorII(number)
{
    return Math.pow(2, number-1)
}

// 用 1*2 矩形 2*n 的矩形
function jumpFloor(number)
{
    let a = 1, b = 2, c = 3
    if (number == 0) return 0
    if (number == 1) return 1
    if (number == 2) return 2;
    for (let i = 0; i < number - 3; i++) {
        a = b
        b = c
        c = a + b
    }
    return c
}