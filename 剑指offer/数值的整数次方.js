// 考虑边界值的简易算法
function PowerWithUnsignedExpo(base, unSignedExpo) {
  // 连乘时间复杂度O(n)
  let result = 1;
  for (let i = 1; i <= unSignedExpo; i++) {
      result *= base;
  }
  
  return result;
}

function Power(base, exponent)
{
  if ((base == 0 && exponent < 0) || base == 0) {
      return 0;
  }
  let absExpo = exponent;
  if (exponent < 0) 
      absExpo = -exponent;
  let result = PowerWithUnsignedExpo(base, absExpo);
  if (exponent < 0) 
      result = 1 / result;
  
  return result;
}

// 快速幂算法
function Power(base, exponent)
{
    //方法二:效率优化
    //连乘时间复杂度O(n)
    //当指数exponent很大时，选择快速幂算法，时间复杂度O(logn)
    var isGZero = true;
    var res = 1;
    if(exponent == 0)
        return 1;
    if(exponent < 0){
        exponent = -exponent;
        isGZero = false;
    }
    while(exponent > 0){
        if(exponent & 1 == 1){
            res *= base;
        }
        base *= base;
        exponent >>= 1;
    }
    return isGZero ? res : (1 / res);
  }