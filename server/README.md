TOY ROBOT SIMULATOR
====================

This project is a TOY ROBOT implementation for the problem statement mentioned in PROBLEM.md file.
The TOY ROBOT can be placed and moved on the 5*5 table. Below diagram represents table and all positions robot can have on the TABLE.

            NORTH

        4 [ ][ ][ ][ ][ ]
        3 [ ][ ][ ][ ][ ]
WEST    2 [ ][ ][ ][ ][ ]   EAST
        1 [ ][ ][ ][ ][ ]
        0 [ ][ ][ ][ ][ ]
           0  1  2  3  4

            SOUTH

Following commands can be issued to robot:
PLACE X,Y,F- PLACE will put the toy robot on the table in position X,Y and F facing NORTH, SOUTH, EAST or WEST.
                 The first valid command to the robot is a PLACE command.
MOVE- MOVE will move the toy robot one unit forward in the direction it is currently facing.
LEFT/RIGHT- LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.
REPORT- REPORT will announce the robot's location in X,Y format, facing direction F. e.g. 2,2,WEST etc. 

Note: Robot not placed on the table will ignore the MOVE, LEFT, RIGHT and REPORT commands.


PROJECT
=========


PREREQUISITS
-------------
Download and install latest version of nodejs using below URL. (Ignore this step if already installed)
https://nodejs.org/en/download/


STEPS TO BUILD PROJECT
----------------------

1. Open project root folder in any editor.(ignore step if directly working on terminal)
2. Open terminal at project root folder and run below commands.
    a. Installs all the required dependancies for the project.
        npm i
    b. After successful installation of the dependencies; Run build command
        npm run build
    c. Run start command which will run the project
        npm start
3. The program will run, print out user instruction and asks user to enter command.
4. To stop the programe please press control+c command.




SOME SAMPLE INPUTS AND OUTPUTS
==============================

PLACE 2,2 NORTH
MOVE
RIGHT
MOVE
LEFT
MOVE
RIGHT
MOVE
LEFT
MOVE
REPORT

Output -> 4,4,NORTH
-------------------------------

PLACE 0,0 WEST
MOVE
MOVE
RIGHT
MOVE
MOVE
MOVEß
MOVE
MOVE
MOVE
MOVE
REPORT

Output -> 0,4,NORTH
-------------------------------

PLACE 2,2 NORTH
RIGHT
RIGHT
RIGHT
REPORT

Output -> 2,2,WEST
--------------------------------

PLACE 2,2 NORTH
LEFT
LEFT
LEFT
REPORT

Output -> 2,2,EAST
--------------------------------