import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

class Book {
    String title;
    String author;
    String isbn;

    public Book(String title, String author, String isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

public class BookManagementSystem {
    private Map<String, Book> bookMap;

    public BookManagementSystem() {
        this.bookMap = new HashMap<>();
    }

    public void addBook(String title, String author, String isbn) {
        bookMap.put(isbn, new Book(title, author, isbn));
    }

    public void removeBook(String isbn) {
        if (bookMap.containsKey(isbn)) {
            bookMap.remove(isbn);
        } else {
            throw new RuntimeException("Book not found");
        }
    }

    public Book searchBook(String isbn) {
        if (bookMap.containsKey(isbn)) {
            return bookMap.get(isbn);
        } else {
            throw new RuntimeException("Book not found");
        }
    }

    public static void main(String[] args) {
        BookManagementSystem bms = new BookManagementSystem();
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("1. Add Book");
            System.out.println("2. Remove Book");
            System.out.println("3. Search Book");
            System.out.println("4. Exit");

            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline left-over

            switch (choice) {
                case 1:
                    System.out.println("Enter title:");
                    String title = scanner.nextLine();
                    System.out.println("Enter author:");
                    String author = scanner.nextLine();
                    System.out.println("Enter isbn:");
                    String isbn = scanner.nextLine();

                    bms.addBook(title, author, isbn);
                    break;
                case 2:
                    System.out.println("Enter isbn:");
                    isbn = scanner.nextLine();

                    try {
                        bms.removeBook(isbn);
                    } catch (RuntimeException e) {
                        System.out.println(e.getMessage());
                    }
                    break;
                case 3:
                    System.out.println("Enter isbn:");
                    isbn = scanner.nextLine();

                    try {
                        Book book = bms.searchBook(isbn);
                        System.out.println("Title: " + book.title);
                        System.out.println("Author: " + book.author);
                        System.out.println("ISBN: " + book.isbn);
                    } catch (RuntimeException e) {
                        System.out.println(e.getMessage());
                    }
                    break;
                case 4:
                    System.exit(0);
                    break;
                default:
                    System.out.println("Invalid choice");
            }
        }
    }
}



