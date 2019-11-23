// 带监视哨, 在已排好的序列之后的一个元素往前扫描
const insertSortWithLookOut=(arr)=>{
  let j;
  for(let i=2;i<arr.length;i++){

    if(arr[i]<arr[i-1]){
      arr[0]=arr[i];
      for(j=i-1;arr[j]>arr[0];j--){
        arr[j+1]=arr[j];
      }
      arr[j+1]=arr[0];
    }
  }
}

// 测试: success