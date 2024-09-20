#include<stdio.h>
void BS(int* A,int n){
  int t;
  for(int i=0;i<n-1;i++){
     for (int j = 0; j <n-1-i; j++){
      if (A[j]>A[j+1]){
        t=A[j];
        A[j]=A[j+1];
        A[j+1]=t;  
      }
     }
    }
  }
void PA(int* A, int n){
  for (int i=0; i<n;i++){
    printf("%d ",A[i]);
  }
  printf("\n");
}
int main()
{
  int A[]={66,0,12,89,65,99};
  int n=6;
  PA(A,n);
  BS(A,n);
  PA(A,n);
  return 0;
}



