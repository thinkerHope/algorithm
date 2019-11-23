class solution {

  // 递归实现
  void quicksort(int s[],int left,int right){
       if(left<right){
           int temp,i=left,j=right;
           temp=s[right];
           while(i<j){
               //寻找左边第一个大于基准值的下标
               while(s[i]<=temp&&i<j)i++;
               if(i<j)s[j--]=s[i];
               //寻找右边第一个小于基准值的下标
               while(s[j]>=temp&&i<j)j--;
               if(i<j)s[i++]=s[j];
           }
           s[i]=temp;
           quicksort(s,left,i-1);      //递归左边部分数组
           quicksort(s,i+1,right);     //递归右边部分数组
       }
   }
   
   // 非递归
   public static void quickSortByStack(int left, int right){
        LinkedList<Pair> stack = new LinkedList<>();
        //保存左右边界
        stack.push(new Pair(left, right));
        while(!stack.isEmpty()){
            Pair pair = stack.pop();
            left = (int)pair.getKey();
            right = (int)pair.getValue();
            if(left >= right - 1){
                continue;
            }
            int temp = nums[left];
            int L = left, R = right - 1;
            //partition过程，注意细节
            while(L <= R){
                while(L < R && nums[R] >= temp){
                    R--;
                }
                if(L < R){
                    nums[L++] = nums[R];
                }
                while(L < R && nums[L] <= temp){
                    L++;
                }
                nums[R--] = nums[L];
            }
            nums[L] = temp;
            //先入右边部分，再入左边部分
            if(L < right - 1){
                stack.push(new Pair(L + 1, right));
            }
            if(left < L - 1){
                stack.push(new Pair(left, L));
            }
        }
    }
}