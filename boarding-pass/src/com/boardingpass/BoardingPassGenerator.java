package com.boardingpass;

import javax.swing.*;

public class BoardingPassGenerator extends JFrame {
    private JPanel panelTop;
    private JPanel panelBottom;
    private JLabel textTitle;
    private JTextField textName;
    private JTextField textEmail;
    private JButton buttonUpdate;s
    private JButton buttonExport;
    private JRadioButton maleRadioButton;
    private JRadioButton femaleRadioButton;
    private JRadioButton nonbinaryRadioButton;
    private JTextField textAge;
    private JTextField textPhone;
    private JTextField textDate;
    private JTextField textDestination;
    private JTextField textDeparture;
    private JPanel panelMain;
    private JPanel panelList;
    private JList list1;

    BoardingPassGenerator(){

        this.setContentPane(this.panelMain);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.pack();
    }

    public static void main(String[] args) {
        BoardingPassGenerator boardingPassGenerator = new BoardingPassGenerator();
        boardingPassGenerator.setVisible(true);
    }


}
