def isPrimeNumber(num):
    if num < 2:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

rows = int(input("Enter the number of rows: "))
counter = 2  # Start from 2

for i in range(1, rows + 1):
    primes_in_row = []
    for j in range(i):  # Print 'i' primes in each row
        while not isPrimeNumber(counter):
            counter += 1  # Skip non-primes
        primes_in_row.append(str(counter))
        counter += 1
    print(", ".join(primes_in_row))  # Print primes with comma separation
