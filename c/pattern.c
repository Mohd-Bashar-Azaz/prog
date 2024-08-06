#include <stdio.h>
int main()
{
    int i, j, rows = 7;
    for (i = 2; i <= rows; i++)
    {
        for (j = i; j <=rows; j++)
        {
            printf("%d", j);
        }
        printf("\n");
    }
    return 0;
}
