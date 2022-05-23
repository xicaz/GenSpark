package com.boardingpass;

import org.json.JSONArray;
import org.json.JSONObject;
import javax.swing.*;
import javax.swing.event.ListSelectionEvent;
import javax.swing.event.ListSelectionListener;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

public class BoardingPassGenerator extends JFrame{

    int ticketPrice;
    int boardingPassNumber;
    private int eta;
    private double price;
    private JPanel panelTop;
    private JPanel panelBottom;
    private JLabel textTitle;
    private JTextField textName;
    private JTextField textEmail;
//    private JButton buttonCreate;
    private JButton buttonExport;
    private JButton buttonSave;
    private JTextField textAge;
    private JTextField textPhone;
    private JTextField textDate;
    private JTextField textDestination;
    private JTextField textDepartureTime;
    private JPanel panelMain;
    private JPanel panelList;
    private JList listTickets;
    private JTextField textGender;
    private JButton buttonCreate;
    private JTextField textOrigin;
    private JTextField textTotalMiles;
    private ArrayList<Ticket> tickets;
    private DefaultListModel listTicketsModel;



    BoardingPassGenerator(){
        super( "Boarding Pass App" );
        this.setContentPane(this.panelMain);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.pack();

 //
        this.ticketPrice = 350;
        this.eta = 0;
        this.boardingPassNumber = 0;



        tickets = new ArrayList<Ticket>();
        listTicketsModel = new DefaultListModel();
        listTickets.setModel(listTicketsModel);
//        buttonCreate.setEnabled(false);


        buttonSave.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

                int ticketNumber = listTickets.getSelectedIndex();
                if (ticketNumber >= 0){
                    Ticket t  = tickets.get(ticketNumber);
                    t.setName(textName.getText());
                    t.setEmail(textEmail.getText());
                    t.setDestination(textDestination.getText());
                    t.setDate(textDate.getText());
                    t.setDepartureTime(textDepartureTime.getText());
                    t.setTotalMiles(textTotalMiles.getText());
                    t.setGender(textGender.getText());
                    t.setPhoneNumber(textPhone.getText());
                    t.setAge(textAge.getText());
                    refreshTicketsList();
                    createTicketFile(t);
                } else {
                    System.out.println("Can only save existing if an item is selected in the list");
                }

            }
        });

        buttonExport.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {


                    listTicketsModel.removeAllElements();
                    System.out.println("Removing people");



            }
        });

        buttonCreate.addActionListener(new ActionListener() {

            @Override
            public void actionPerformed(ActionEvent e) { buttonSaveClick(e); }
        });



        listTickets.addListSelectionListener(new ListSelectionListener() {
            @Override
            public void valueChanged(ListSelectionEvent e) {
               int ticketNumber = listTickets.getSelectedIndex();
               if (ticketNumber >= 0){
                   Ticket t  = tickets.get(ticketNumber);
                   textName.setText(t.getName());
                   textEmail.setText(t.getEmail());
                   textPhone.setText(t.getPhoneNumber());
                   textAge.setText(t.getAge());
                   textGender.setText(t.getGender());
                   textDate.setText(t.getDate().format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));
                   textOrigin.setText(t.getOrigin());
                   textDestination.setText(t.getDestination());
                   textTotalMiles.setText(t.getTotalMiles());
                   textDepartureTime.setText(t.getDepartureTime().format(DateTimeFormatter.ISO_TIME));
                   buttonSave.setEnabled(true);
               } else {
                   buttonSave.setEnabled(false);
               }
            }
        });



    }


    private boolean saveFileFromString(String filename, String data) {
        try {
            FileWriter fw = new FileWriter(filename);
            PrintWriter out = new PrintWriter(fw);
            out.println( data );
            out.close();
            fw.close();
            return true;
        } catch(Exception e) {
            System.out.println("[saveFileFromString] error saving "+filename);
            return false;
        }
    }

    private void savePeopleFile() {
        // Convert the ArrayList of Person objects into a JSONArray of JSONObjects
        JSONArray jry = new JSONArray();
        for (Ticket t : tickets) {
            JSONObject json = new JSONObject(t);
            jry.put(json);
        }
        // Save the JSONArray to a text file
        saveFileFromString("tickets.json", jry.toString());
    }

    private String loadFileToString(String filename) {
        StringBuilder sb = new StringBuilder();
        try {
            // Load the JSON file as String data
            File file = new File(filename);
            Scanner reader = new Scanner(file);
            while (reader.hasNextLine()) {
                sb.append(reader.nextLine());
            }
            reader.close();
            return sb.toString();
        } catch (Exception e) {
            return null;
        }
    }

    private void loadTicketsFile() {
        String filename = "tickets.json";
        String fileData = loadFileToString(filename);
        if (fileData != null) {
            // Create a JSONArray from the String
            JSONArray jry = new JSONArray(fileData);
            // Iterate over the JSONObjects within the JSONArray
            for (int i=0; i< jry.length(); i++) {
                JSONObject o = jry.getJSONObject(i);
                // Use each JSONObject to create a Person object
                Ticket t = new Ticket(o.getString("name"),
                        o.getString("email"),
                        o.getString("phoneNumber"),
                        o.getString("origin"),
                        o.getString("destination"),
                        o.getString("totalMiles"),
                        o.getString("gender"),
                        o.getString("age"),
                        o.getString("date"),
                        o.getString("departureTime"));
                // Add the Ticket object to the ArrayList of tickets

                tickets.add(t);
            }
        }
        // Refresh the list
        refreshTicketsList();
    }

    public double calculateTicketPrice(Ticket t){


        // Average US domestic round trip flight cost
        double ticketPrice = 330;

        //  the case-sensitivity edge case

        String gender = t.getGender().toUpperCase();

        // if female, price is reduced 25% >> which 75% of original

        if (gender == "F") {
            ticketPrice = (int) (ticketPrice * .75);
        }

        int age = Integer.parseInt(t.getAge());


        if(age <= 12){
            ticketPrice = ticketPrice *.5;
        }
        if(age >= 60){
            ticketPrice = ticketPrice *.4;
        }

        return ticketPrice;
    }

    public LocalTime calculateETA(Ticket t){

        int totalMiles = Integer.parseInt(t.getTotalMiles());

        LocalTime departureTime = t.getDepartureTime();


        // Average airplane speed = 460-575mph = Rounded to 500mph

        eta = (int) (totalMiles / 500.00);

        t.setArrivalTime(departureTime.plusMinutes(eta));

        System.out.println("The flight will take " + eta + " hours to complete!");

        return t.getArrivalTime();
    }


    public void createTicketFile(Ticket t){

        // text for generating text file

        String newLine = System.getProperty("line.separator");
        String string = t.getBoardingPass();
        String text = string.concat(newLine + "Name: "+ textName.getText())
                .concat(newLine)
                .concat("Email: " + textEmail.getText())
                .concat(newLine)
                .concat("Age: " + textAge.getText())
                .concat(newLine)
                .concat("Gender: "+ textGender.getText())
                .concat(newLine)
                .concat("Phone Number: "+ textPhone.getText())
                .concat(newLine)
                .concat("Date: " + textDate.getText())
                .concat(newLine)
                .concat("Origin: "+ textOrigin.getText())
                .concat(newLine)
                .concat("Destination "+ textDestination.getText())
                .concat(newLine)
                .concat("Arrival Time: " + String.valueOf(t.getArrivalTime()))
                .concat(newLine)
                .concat("Price: " + price);

        try {
            PrintWriter output = new PrintWriter(string.concat("_ticket.txt"));

            output.print(text);

            output.close();

            System.out.println("output exported");

        } catch (IOException ex) {
            ex.printStackTrace();
        }

    }

    public void buttonSaveClick (ActionEvent e){
        Ticket t = new Ticket(textName.getText(), textEmail.getText(), textPhone.getText(), textOrigin.getText(), textDestination.getText(), textTotalMiles.getText(), textGender.getText(), textAge.getText(), textDate.getText(), textDepartureTime.getText());

        addTicket(t);

        calculateETA(t);

        int price = (int) calculateTicketPrice(t);

        t.setBoardingPass(getSaltString());

        refreshTicketsList();

        createTicketFile(t);

    }

    public void addTicket(Ticket t){
        tickets.add(t);
        refreshTicketsList();
    }

    public void refreshTicketsList(){

        listTicketsModel.removeAllElements();
        System.out.println("Removing people");

        for (Ticket t: tickets){
            System.out.println("Adding ticket to list: " + t.getDestination());
            listTicketsModel.addElement(t.getName() + " " + t.getDestination());

        }

    }

    public static void printLookAndFeels() {
        UIManager.LookAndFeelInfo[] looks = UIManager.getInstalledLookAndFeels();
        for (UIManager.LookAndFeelInfo look : looks) {
            System.out.println(look.getClassName());
        }
    }




//     Method to calculate ETA






    // randomizer using salt method algo
    private String getSaltString() {
        String saltChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        StringBuilder salt = new StringBuilder();
        Random rnd = new Random();
        while (salt.length() < 13) { // length of the random string.
            int index = (int) (rnd.nextFloat() * saltChar.length());
            salt.append(saltChar.charAt(index));
        }
        String saltStr = salt.toString();
        return saltStr;

    }






    public static void main(String[] args) {

        printLookAndFeels();
//        View view = new View("Contacts app");
        BoardingPassGenerator boardingPassGenerator = new BoardingPassGenerator();

        try {
            UIManager.setLookAndFeel("ClassicLookAndFeel");
        } catch (Exception e) {

        }

        boardingPassGenerator.setVisible(true);


//    public Ticket(String name, String email, String phoneNumber, String destination, String gender, String age, String date, String departureTime) {

//        Ticket paris = new Ticket("Anna", "anna@email.com", "5103333131", "Paris","NYC","3628","F", "26", "05/05/2022", "08:30");
//        boardingPassGenerator.addTicket(paris);


    }



}
