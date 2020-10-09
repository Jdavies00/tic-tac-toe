
//ref to connecet to  html id div gameBoard
const gmaeTiles = document.getElementById("gameBoard");
//declare global variables
let gameStat, boardStat ,currentPlayer ,chickenDinnerCombos, messages, resetButton;
//


//function to creat text node
// this was a mistake
function addTextNode(type,text) {
    let h = document.createElement(type);
    let t = document.createTextNode(text);
    h.appendChild(t);
  
}
let heading = addTextNode("h1","work because I tell you too")

function generateElement(type, id, class_list, parent = false, event = false, event_listener_function = false) {//function is loking for thses parameters
    
    let newElement = document.createElement(type); //limited scope LET creates varibale NEWELEMENT in html doc  ||  type meaning any elemnt type
    newElement.id = id;//this newly created elemnt has an id that is = to the id pased to the funct     || 
    newElement.setAttribute("class", class_list);// give it a class and name that class
    if (event) { //if called for/with an event give it one
        newElement.addEventListener(event, event_listener_function);//name type of event and what function
    }
    else if (parent) {
        parent.appendChild(newElement);
    }
   
    return newElement;
}

let newRow = generateElement("div","div1","row")
//View- whats cookin
//function creats html elements
// let newElement = document.createElement('input');
// console.log(newRow)
// document.body.appendChild(newElement);


function viewInit(){

}



//Controler- 
// const enableListeners = () =>





//Modle
//const chickenDinnerCombos=[     //2d arry of winning combos
    [0,1,2],//0
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6]//7

//]





