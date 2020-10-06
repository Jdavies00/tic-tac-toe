//Monday sheshion with Ian 


//-----------

## pesudocode


<!-- functional  programming
do not abstract every ting to a function
    ex. function chekc check if ture
        instead let res = a=== b -->


#### render logic ( ui ) the view/ part of the init function
render the board - for lop to gernate all

```funtion generateGameBoard(){
    let board = getElementbyId

}
```
render the buttons/header/infomation









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




