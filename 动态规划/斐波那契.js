// 超时算法
function Fibonacci(n)
{
    if (n <= 2) return 1
    return Fibonacci(n-1) + Fibonacci(n-2)
}

// 循环迭代
// 时间: O(n)
// 空间: O(1)
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

// 矩阵求幂
// 时间: O(logn)
// 空间: O(1)
// -—     —-      -—   —- -—      —-        -—   —-(n-1) -—    —-
// | f(n)  |      | 1 1 | | f(n-1) |        | 1 1 |      | f(1) |
// | f(n-1)|   =  | 1 0 | | f(n-2) |   =    | 1 0 |      | f(0) |
// -—     —-      -—   —- -—      —-        -—   —-      -—    —-
// 转化为了求 矩阵的 n-1 次方（快速幂算法）
var fib = function(N) {
    if (N <= 1) return N

    function matrixPower(A, n) {
        const result = [[1, 0], [0, 1]] 
        while (n >= 1) {
            if (n%2 !== 0) {
                n -= 1       
                mutiply(result, A)
            }
            n = n/2
            mutiply(A, A)
        }

        return result
    }
    function mutiply(A, B) {
        a = A[0][0] * B[0][0] + A[0][1] * B[1][0]
        b = A[0][0] * B[0][1] + A[0][1] * B[1][1]
        c = A[1][0] * B[0][0] + A[1][1] * B[1][0]
        d = A[1][0] * B[0][1] + A[1][1] * B[1][1]

        A[0][0] = a
        A[0][1] = b
        A[1][0] = c
        A[1][1] = d
    }

    const matrix = [[1, 1], [1, 0]]
    const result = matrixPower(matrix, N-1)

    return result[0][0]
};