#include<stdio.h>
int main()
{
    int i,x,rev=0;
    printf("enter the no");
    scanf("%d",&i);
    x=i;
    while (i!=0)
    {
        rev=(rev*10)+i%10;
        i/=10;

    }
    printf("%d",rev);
    return 0;
}