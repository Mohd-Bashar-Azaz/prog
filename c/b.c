// write a program to insert and delete operation in a single dimension array in c

#include <stdio.h>

#define MAX 100 // Maximum size of the array

// Function to display the array
void display(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d,", arr[i]);
    }
    printf("\n");
}

// Function to insert an element into the array
void insert(int arr[], int *n, int element, int position) {
    if (*n >= MAX) {
        printf("Array is full, cannot insert.\n");
        return;
    }
    if (position < 0 || position > *n) {
        printf("Invalid position!\n");
        return;
    }
    // Shift elements to the right
    for (int i = *n; i > position; i--) {
        arr[i] = arr[i - 1];
    }
    // Insert the new element
    arr[position] = element;
    (*n)++; // Increment the size of the array
    printf("Element inserted successfully.\n");
}

// Function to delete an element from the array
void delete(int arr[], int *n, int position) {
    if (*n == 0) {
        printf("Array is empty, cannot delete.\n");
        return;
    }
    if (position < 0 || position >= *n) {
        printf("Invalid position!\n");
        return;
    }
    // Shift elements to the left
    for (int i = position; i < *n - 1; i++) {
        arr[i] = arr[i + 1];
    }
    (*n)--; // Decrement the size of the array
    printf("Element deleted successfully.\n");
}

int main() {
    int arr[MAX]; // Array declaration
    int n = 0;    // Current size of the array
    int choice, element, position;

    while (1) {
        printf("\nMenu:\n");
        printf("1. Insert\n");
        printf("2. Delete\n");
        printf("3. Display\n");
        printf("4. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
        case 1:
            printf("Enter element to insert: ");
            scanf("%d", &element);
            printf("Enter position to insert (0-based index): ");
            scanf("%d", &position);
            insert(arr, &n, element, position);
            break;
        case 2:
            printf("Enter position to delete (0-based index): ");
            scanf("%d", &position);
            delete(arr, &n, position);
            break;
        case 3:
            printf("Array elements: ");
            display(arr, n);
            break;
        case 4:
            printf("Exiting...\n");
            return 0;
        default:
            printf("Invalid choice! Please try again.\n");
        }
    }
}
