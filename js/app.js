/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/
const sections = document.querySelectorAll('section');
var navbar = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Main Functions
 *
*/
//function to create an Selection Buttons
function newUpperPannel() {
	let i = 0;
	let listNumber = 4;
  //while loop to create an four Buttons;
    while (i < listNumber) {
    //add YourActiveClass
    sections[i].classList.add('your-active-class');
    //creating li Elements
    var bottons = document.createElement('li');
    //get Arrtribute for the Name and href
    var sectionPress = sections[i].getAttribute('id');
		var sectionTitle = sections[i].getAttribute('data-nav');
    //add the li Elements to navbar
		navbar.appendChild(bottons);
    //add the anchors and name to li elements
		bottons.innerHTML = `<a href='#${sectionPress}'>${sectionTitle}</a>`;
    const sColor = document.querySelectorAll('h2');
    sColor[i].style.color="orange";
    i++
	}

//add an Home Button at the First of four buttons to make them five buttons
	var homeButton= document.createElement('li');
	homeButton.innerHTML = `<a href='#'>Home</a>`;
	navbar.insertBefore(homeButton, navbar.firstChild);
  //function to style the buttons
	buttonsStyle();
}
/**
 * End Main Functions
 * Begin Helper Functions
 *
*/
//function to style the buttons
function buttonsStyle() {
  //select to four buttons
	const links = document.querySelectorAll('a');
	//for loop to style the buttons;
	for (let i = 0; i < links.length; i++) {
		links[i].classList.add('menu__link');
    links[i].style.color="orange";

    }
}
/**
 * End Helper Functions
**/

//Style Some Elements
navbar.style.backgroundColor="darkcyan";
document.querySelector('h1').style.color = "cyan";

//active the new newUpperPannel
newUpperPannel()
