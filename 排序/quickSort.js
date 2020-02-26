// 一趟快排
function Partition (r, i, j) {
  const pivot = r[i]

  while (i < j) {
    while (i < j && r[j] >= pivot) {
      j--
    }
    if (i < j) {
      r[i] = r[j]
      i++
    }
    while (i < j && r[i] < pivot) {
      i++
    }
    if (i < j) {
      r[j] = r[i]
      j--
    }
  }
  r[i] = pivot

  return i
}
// 递归
function quickSort (low, height) {
  const middle = Partition(r, low ,height)
  quickSort(low, middle - 1)
  quickSort(middle + 1, height)
}