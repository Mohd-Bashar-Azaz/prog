#include <stdio.h>

void addstr(char *a1, char *a2) {
    printf("%s%s", a1, a2);
}

int main() {
    char a[] = "bashar ";
    char b[] = "azaz";
    addstr(a, b);
    return 0;
}
