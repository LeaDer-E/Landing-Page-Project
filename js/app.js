// Define Global Variables
const sections = document.querySelectorAll('section');
const navbar = document.getElementById('navbar__list');
const forScrolling = document.getElementsByClassName("menu__link");

//Style Some Elements
navbar.style.backgroundColor="darkcyan";
document.querySelector('h1').style.color = "cyan";

//function to create an Selection Buttons
function newUpperPannel() {
	let i = 0;
	let listNumber = 4;
  //while loop to create an four Buttons;
    while (i < listNumber) {
    //creating li Elements
    let buttons = document.createElement('li');
    //get Arrtribute for the Name and href
    let sectionPress = sections[i].getAttribute('id');
		let sectionTitle = sections[i].getAttribute('data-nav');
    //add the li Elements to navbar
		navbar.appendChild(buttons);
    //add the anchors and name to li elements
		buttons.innerHTML = `<a href='#${sectionPress}'>${sectionTitle}</a>`;
    //color the Section header
    const sColor = document.querySelectorAll('h2');
    sColor[i].style.color="orange";
    i++
    }
	//call homw and down function
  homeAndDown();
  //function to style the buttons
	buttonsStyle();
}

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


//creat Home and Down Buttons
function homeAndDown(){
  //add an Home Button at the First of four buttons to make them five buttons
  let homeButton = document.createElement('li');
  homeButton.innerHTML = `<a href='#Home'>Home</a>`;
  navbar.insertBefore(homeButton, navbar.firstChild);
  //configure Home
  const home = document.querySelector('h1')
  home.setAttribute('id', 'Home');
  //add an Down Button at the End of four buttons to make them six buttons
  let downButton = document.createElement('li');
  downButton.innerHTML = `<a href='#Down'>Down</a>`;
  navbar.appendChild(downButton);
  //configure Down
  const down = document.querySelector('footer')
  down.setAttribute('id', 'Down');
}

//active the new newUpperPannel
newUpperPannel()

//function to active (Your-active-class) at the Viewing Section
function getBounding() {
//forEach function to the sections
  sections.forEach(function (section) {
      // active class atviewing section, and disable it at notshown sections
      if (section.getBoundingClientRect().top >= -100 &&
			    section.getBoundingClientRect().top <=  150) {
			    section.classList.add('your-active-class');
			} else { //disable active class at not shown sections
				  section.classList.remove("your-active-class");
			}
	});
};

//Event listener to getBounding function
document.addEventListener("scroll", getBounding);

//a smooth scrolling behavior with EventListener to scroll when click on buttons
navbar.addEventListener('click', function (evt) {
    evt.preventDefault(evt);
		//get the clicked button from evt
		target = evt.target;
    //if condetion to scrolls when click on buttons
    if (target.classList.contains('menu__link')) {
      //Get id of elements from the href after removing the # hashtag mark with slice then >> scrollIntoView with smooth method
      document.getElementById(target.getAttribute('href').slice(1)).scrollIntoView({ behavior: 'smooth' });
    }
});



//the gighlight function to highlight the viewing button section
function highlight() {
	/* some variables to transform the node array to normal array
	   then highlight the section button when the section are viewing on screen */
	const buttonsNodeArray = document.querySelectorAll('a');
	const buttonsArray = Array.prototype.slice.call(buttonsNodeArray);
	const sectionsButtons = buttonsArray.slice(1,5);
	//const sects = document.querySelectorAll('h2');
  //if condetion to highlight the viewing section button
  if (document.getElementById(sectionsButtons[0].hash.slice(1)).getBoundingClientRect().top >= -100 &&
      document.getElementById(sectionsButtons[0].hash.slice(1)).getBoundingClientRect().top <=  150) {
      sectionsButtons[0].classList.add("page__footer");
  } else if (document.getElementById(sectionsButtons[1].hash.slice(1)).getBoundingClientRect().top >= -100 &&
      document.getElementById(sectionsButtons[1].hash.slice(1)).getBoundingClientRect().top <=  150) {
      sectionsButtons[1].classList.add("page__footer");
  } else if (document.getElementById(sectionsButtons[2].hash.slice(1)).getBoundingClientRect().top >= -100 &&
      document.getElementById(sectionsButtons[2].hash.slice(1)).getBoundingClientRect().top <=  150) {
      sectionsButtons[2].classList.add("page__footer");
  } else if (document.getElementById(sectionsButtons[3].hash.slice(1)).getBoundingClientRect().top >= -70 &&
      document.getElementById(sectionsButtons[3].hash.slice(1)).getBoundingClientRect().top <=  150) {
      sectionsButtons[3].classList.add("page__footer");
  } else {
      sectionsButtons[0].classList.remove("page__footer");
      sectionsButtons[1].classList.remove("page__footer");
      sectionsButtons[2].classList.remove("page__footer");
      sectionsButtons[3].classList.remove("page__footer");
  }
}

//add event listener to browser iwth highlight function
document.addEventListener("scroll", highlight);
