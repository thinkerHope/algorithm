// 超时算法
function Fibonacci(n)
{
    if (n <= 2) return 1
    return Fibonacci(n-1) + Fibonacci(n-2)
}

// 循环迭代
function Fibonacci(n)
{
    let a, b = 1, c = 0
    // 1 1 2 3 5 第3项才是数列的开始，所以i = 0
    for (let i = 0; i < n; i++) {
        if (n <= 2) {
            c = 1
        } else {
            a = b
            b = c
            c = a + b
        }
    }
    return c
}