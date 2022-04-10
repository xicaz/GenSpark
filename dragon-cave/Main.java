import java.util.Scanner;

public class DragonCave {

    public static void main(String args[]) {
        System.out.print("""You are in a land full of dragons. In front of you,
                you see 2 caves. In one cave, the dragon is friendly
                an will share his treasure with you. The other dragon
                is greedy and hungry and will eat you on sight.
                Which cave will you go into? (1 or 2)""");

        Scanner myObj = new Scanner(System.in);
        String userChoice = myObj.nextLine();

        if(userChoice.equals("1")){
            System.out.println("""You approach the cave...
                    It's well lit.
                    A large dragon jumps out from his two floor cottage!
                    He hands you 5 runes and tells you to get off his property.
                    """);
        }else{
            System.out.println("""You approach the cave ...
                    It is dark and spooky ...
                    A Large dragon jumps out in front of you! He opens his jaws and...
                    Gobbles you down in one bite!
                    """);
        }

    }
}



