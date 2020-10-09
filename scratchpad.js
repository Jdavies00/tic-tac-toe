
//ref to connecet to  html id div gameBoard
//declare global variables
let gameStat, boardStat ,currentPlayer ,chickenDinnerCombos, messages, resetButton;



//function to creat text node
function addTextNode(type,text) {
    let h = document.createElement(type);
    let t = document.createTextNode(text);
    h.appendChild(t);
    document.body.appendChild(h)
  
}
let heading = addTextNode("h1","Tic-Tac-Toe")


//View- whats cookin
//function to add other html elements
function generateElement(type, id, class_list,  parent = false, event = false, event_listener_function = false, text) {//function is loking for thses parameters
    
    let newElement = document.createElement(type); //limited scope LET creates varibale NEWELEMENT in html doc  ||  type meaning any elemnt type
    newElement.id = id;//this newly created elemnt has an id that is = to the id pased to the funct     || 
    newElement.setAttribute("class", class_list);// give it a class and name that class
    if (event) { //if called for/with an event give it one
        newElement.addEventListener(event, event_listener_function);//name type of event and what function
    }
    else if (parent) {
        parent.appendChild(newElement);
    }
    else if(text){
        let h = document.createElement(type);
    let t = document.createTextNode(text);
    h.appendChild(t);
    document.body.appendChild(h)

    }
   
    return newElement;
}

//render  cell grid 
function viewInit(){
    let gameBoard = document.getElementById("gameBoard");
    gameBoard.innerHTML = " "
    var row1 = document.createElement("div")
    row1.setAttribute("class","row")
    for (i = 0; i <= 8; i++) 


    // let cellTopRow= generateElement("div", "gridRow","row w-50 bg-dark")
    // for (let i = 0; i < 9; i++) {
    //     let cellSingle= generateElement("div","cell", i ,cellTopRow);//"click',cellOnClick
    //     cellSingle.textContent = " "; 
        
    }


viewInit();



function initControlLogic(){
    function init() {
    
        viewInit();
        
        init_game();
 }


function cellOnClick(event){

}
    // restsrtbutton
    // player1 and player 2
    // smybols
    //notification




// }

// function cellOnClick(e){

// }
//init();

//Modle
//stores state
// function initModleLogic(){
    


//const chickenDinnerCombos=[     //2d arry of winning combos


    // [0,1,2],//0
	// [3,4,5],
	// [6,7,8],
	// [0,3,6],
	// [1,4,7],
	// [2,5,8],
	// [0,4,8],
	// [2,4,6]//7

//]


