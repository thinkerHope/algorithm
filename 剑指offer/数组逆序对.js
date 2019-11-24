// 归并分治
function InversePairs(data)
{

  function merge(r, order, l, m, h) {
    let i = l;
    let j = m + 1;
    let k = l;
    while (i <= m && j <= h) {
        if (r[i] <= r[j]) {
            order[k++] = r[i++];
        } else {
            count += (m-i+1); 
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

  function mergePass(r, order, s, n) {
      let p = 0;
      while (p+2*s-1 <= n-1) {
          merge(r, order, p, p+s-1, p+2*s-1);
          p = p + 2*s;
      }
      if (p+s-1 < n-1) {
          merge(r, order, p, p+s-1, n-1);
      } else {
          for (let i = p; i < n; i++) {
              order[i] = r[i];
          }
      }
      console.log(order)

  }

  let s = 1;
  let count = 0;
  const tmp = [];
  const les = data.length;
  while (s <= les) {
      mergePass(data, tmp, s, les);
      s *= 2;
      mergePass(tmp, data, s, les);
      s *= 2;
  }
  
  return count%1000000007;
}

const arr = [364,637,341,406,747,995,234,971,571,219,993,407,416,366,315,301,601,650,418,355,460,505,360,965,516,648,727,667,465,849,455,181,486,149,588,233,144,174,557,67,746,550,474,162,268,142,463,221,882,576,604,739,288,569,256,936,275,401,497,82,935,983,583,523,697,478,147,795,380,973,958,115,773,870,259,655,446,863,735,784,3,671,433,630,425,930,64,266,235,187,284,665,874,80,45,848,38,811,267,575];
console.log()
console.log(InversePairs(arr))