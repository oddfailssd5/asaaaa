import java.util.ArrayList;
import java.util.List;

public class CodeWithMoreIssues {

    private int unusedVariable; // Variable declarada pero no utilizada

    public void exampleMethod() {
        int unusedParameter = 10; // Parámetro declarado pero no utilizado

        // Bucle infinito, SonarCloud puede detectar esto
        while (true) {
            System.out.println("This loop will never break.");
        }

        // List sin capacidad inicial especificada, puede afectar el rendimiento
        List<String> listWithoutCapacity = new ArrayList<>();

        // Uso incorrecto de la API de cadenas, SonarCloud puede detectar esto como un posible error de seguridad
        String password = "mySecretPassword";
        System.out.println("Password: " + password);

        // Comparación de cadenas usando ==, debe usarse equals para comparar cadenas en Java
        String str1 = "Hello";
        String str2 = "Hello";
        if (str1 == str2) {
            System.out.println("Strings are equal using ==");
        }

        // Intento de dividir por cero, un posible error que puede ser detectado
        int a = 5;
        int b = 0;
        int result = a / b;

        // Llamada a un método deprecado
        deprecatedMethod();

        // Creación innecesaria de objetos
        String repeatedString = "Repeated String";
        String anotherString = new String("Repeated String");

        // Acceso directo a una variable de instancia sin referencia de objeto
        System.out.println(unusedVariable);
    }

    // Método deprecado
    @Deprecated
    private void deprecatedMethod() {
        System.out.println("This method is deprecated.");
    }
}
