// 二分法
function GetNumberOfK(data, k)
{
    let low = 0;
    let high = data.length - 1;
    while (low < high) {
        mid = Math.floor((low + high) / 2);
        if (k <= data[mid]) {
          high = mid;
        } else {
          low = mid + 1;
        }
    }
    if (k == data[high]) {
      return data.filter(item => item === data[high]).length;
    } else {
      return 0;
    }
}

console.log(GetNumberOfK([1,3,3,3,3,4,5], 2))