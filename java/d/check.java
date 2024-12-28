import java.util.Scanner;


public class check {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n=sc.nextInt();
        if(n>0){
            System.out.println("The no is positive");
        }
        else{
            System.out.println("The no is negative");
        }
        sc.close();
    }
}