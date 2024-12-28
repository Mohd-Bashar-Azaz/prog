
public class ShapeVolumeCalculator {

    // Method to calculate the surface area of a cylinder
    public double calculateSurfaceArea(double radius, double height) {
        if (radius <= 0 || height <= 0) {
            throw new IllegalArgumentException("Radius and height must be greater than zero");
        }
        return 2 * Math.PI * radius * (radius + height);
    }

    // Overloaded method to calculate the surface area of a sphere
    public double calculateSurfaceArea(double radius) {
        if (radius <= 0) {
            throw new IllegalArgumentException("Radius must be greater than zero");
        }
        return 4 * Math.PI * radius * radius;
    }

    // Overloaded method to calculate the surface area of a cone
    public double calculateSurfaceArea(double radius, double height, boolean isCone) {
        if (radius <= 0 || height <= 0) {
            throw new IllegalArgumentException("Radius and height must be greater than zero");
        }
        double slantHeight = Math.sqrt(radius * radius + height * height);
        return Math.PI * radius * (radius + slantHeight);
    }

    public static void main(String[] args) {
        ShapeVolumeCalculator svc = new ShapeVolumeCalculator();

        try {
            System.out.println("Cylinder Surface Area: " + svc.calculateSurfaceArea(3, 5));
            System.out.println("Sphere Surface Area: " + svc.calculateSurfaceArea(4));
            System.out.println("Cone Surface Area: " + svc.calculateSurfaceArea(3, 5, true));
        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
        }
    }
}
