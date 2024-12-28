# Program to handle division by zero exception

try:
    # Input: numbers for division
    numerator = float(input("Enter the numerator: "))
    denominator = float(input("Enter the denominator: "))

    # Perform division
    result = numerator / denominator
    print(f"The result of division is: {result}")

except ZeroDivisionError:
    print("Error: Division by zero is not allowed.")
except ValueError:
    print("Error: Please enter a valid number.")
except Exception as e:
    print(f"An unexpected error occurred: {e}")
