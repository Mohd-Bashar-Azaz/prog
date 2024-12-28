# Python program to demonstrate the basic operations of a list

def display_menu():
    """Display menu options for the user."""
    print("\n--- List Operations Menu ---")
    print("1. Create a new list")
    print("2. Append an element to the list")
    print("3. Remove an element from the list")
    print("4. Display the list")
    print("5. to extend")
    print("6. to pop an element")
    print("7. Exit")

    

def main():
    
    while True:
        display_menu()
        choice=int(input("enter your choice:"))
        if (choice==1):
            my_list=[]
            print("new list have been created:",my_list)
        elif(choice==2):
            e=input("Enter the number: to append:")
            my_list.append(e)
            print(my_list)
        elif(choice==3):
            e=input("Enter the element: to delete:")
            my_list.remove(e)
            print(my_list)
        elif(choice==4):
            print(my_list)    
        elif(choice==5):
            e=input("Enter the list: to extend:")
            list2 = e.split() 
            my_list.extend(list2)
            print(my_list)
        elif(choice==6):
            e=int(input("Enter the element to pop"))
            my_list.pop(e)
            print(my_list)
        elif(choice==7):
            print("bye!")
            break
        else:
            print("the choice is invalid")

if __name__ == "__main__":
    main()
    
            

            
        