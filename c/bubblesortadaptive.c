#include<stdio.h>
void bubblesort(int* A,int n){
  int temp;
  int issorted=0;
  for(int i=0;i<n-1;i++){
    printf("working on pass no.%d \n",i+1);
    issorted=1;
     for (int j = 0; j <n-1-i; j++)
     {
      if (A[j]>A[j+1])
      {
        temp=A[j];
        A[j]=A[j+1];
        A[j+1]=temp;
        issorted=0;
      }
     }
     if (issorted){
      return ;
     }
  }
}
void printArray(int* A, int n){
  for (int i=0; i<n;i++){
    printf("%d ",A[i]);
  }
  printf("\n");
}
int main()
{
  int A[]={66,0,12,89,65,99};
  int n=6;
  printArray(A,n);
  bubblesort(A,n);
  printArray(A,n);
  return 0;
}



