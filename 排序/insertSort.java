public class Main {

    // public static void main(String[] args) {
    //     int[] a={20,30,21,35,2,1};
    //     insertSortWithLookOut(a);
    //     for(int i=0;i<a.length;i++){
    //         System.out.println(a[i]);
    //     }
    // }
    // a[0]作为监视哨
    public static void insertSortWithLookOut(int[] a){
        int j;
        for(int i=2;i<a.length;i++){
            // 之前以排好序
            if(a[i]<a[i-1]){
                // 哨兵的作用
                a[0]=a[i];  
                for(j=i-1;a[j]>a[0];j--){ 
                    a[j+1]=a[j];
                }
                a[j+1]=a[0];
            }
        }
    }
}
