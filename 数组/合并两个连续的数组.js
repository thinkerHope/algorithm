var merge = function (nums1, m, nums2, n) {
  // bugfix
  if (m === 0) {
      for (let k = 0; k < n; k++) {
          nums1[k] =  nums2[k]
      }
  }
  if (m > 0) {
      let cur = m + n - 1
      let point1 = m - 1
      let point2 = n - 1
      while (point1 >= 0 && point2 >= 0) {
          if (nums1[point1] >= nums2[point2]) {
              nums1[cur--] = nums1[point1--]
          } else {
              nums1[cur--] = nums2[point2--]
          }
      }
      // bugfix
      while (cur >= 0 && point2 >= 0) {
          nums1[cur--] = nums2[point2--]
      }
  }
  return nums1
};