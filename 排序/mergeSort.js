// 两两序列归并 
// 稳定？
function merge(r, order, l, m, h) {

  let i = l;
  let j = m + 1;
  let k = l;
  while (i <= m && j <= h) {
    if (r[i] <= r[j]) {
      order[k++] = r[i++];
    } else {
      order[k++] = r[j++];
    }
  }
  while (i <= m) {
    order[k++] = r[i++];
  }
  while (j <= h) {
    order[k++] = r[j++];
  }
}
// 一趟归并
function mergePass(r, order, s, n) {

  let p = 0;
  while (p+2*s-1 < n-1) {
    merge(r, order, p, p+s-1, p+2*s-1);
    p += 2*s;
  }
  if (p+s-1 < n-1) {
    merge(r, order, p, p+s-1, n-1);
  } else {
    for (let i = p; i < n - 1; i++) {
      order[i] = r[i];
    }
  }
}
// 二路归并
function mergeSort(r, order) {
  let s = 1;
  let n = r.length;
  while (s < n) {
    mergePass(r, tmp, s, n);
    s *= 2;
    mergePass(tmp, r, s, n);
    s *= 2;    
  }
}

const r = [23, 12, 4, 67, 26, 15];
const tmp = [];
merge(r, tmp);
console.log(tmp);