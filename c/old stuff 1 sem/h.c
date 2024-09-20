#include<stdio.h>
#include<conio.h>
void main()
{
  int a,b,t;
  clrscr();
  printf("enter the no a,b:");
  scanf("%d,%d",&a,&b);
  t=a;
  a=b;
  b=t;
  printf("a=%d,b=%d",a,b);
  
}