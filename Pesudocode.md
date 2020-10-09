//Monday sheshion with Ian 


//-----------

## pesudocode

variables

    player1
    player2
    symbol
    current turn
    gameTiles:
                0
                1
                2
                3
                4
                5
                6
                7
                8

```funtion generateGameBoard(){
    let board = getElementbyId
}

# grey area

rendering whos turn 
rendering who just went



# #### game logic

on tile click method
- see if time to check win
    - check win
- call switch player
- lock tile
//    -tells the code to update state

check to see win
- ["x","o",""]
- ["x","o",""]
- ["x","o",""]

-[0,1,2,]
3but have a 0
[1,2,1]
[2,2,2]
[2,1,2]
- on win or on tie
- lock all tiles 
- and display winner
- creat button to restart


switchPlayer
- state var 0/1 -1 x turn, 0 o's turn
- count ++// count %2
- state "x" or "O"


- set next player
     - lock tile - cant replay the same tile twice
        on

didiplay winner
- update render header section
- update restart button

score tracker


-restartGame//// do you even need a restart button ?



Premeis : create a tictactoe game

## view 

function init
- wraps all function

function createBoard()
- creats 3x3 grid
- player1 and 2
-



## controler

clickHandler/s
 update model
 - disable tiles
 - run chekVictory()


## model logic
set default state to 0

setstate()

chceckstate()

checkVictory()
