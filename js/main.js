var theLogo;
var popSize = 10;
var thePopulation;
var numOfGenerations = 0;

var mainWrapper;
var canvasWrapper;
var textWrapper;
var cvs;
var generationsText;
var header;
var paragraph;
var paragraph_string;
var link;

var note_string;
var note;
var youtubelink;

function preload() {
	theLogo = loadImage("https://i.imgur.com/IkeiqVx.jpg");
	note_string = "Please Note: This program requires that the user be using a computer with a strong processor, usually found in desktop computers. If you notice that the box to the left is not producing the logo image but instead appears as a jumble of blue and white circles, please visit the Youtube link below to see what it should look like."
	paragraph_string = "Hello! Welcome to my website dedicated to a program I wrote. On the left of your screen, you may notice a small box being populated with a bunch of blue and white dots. Slowly, those circles will align themselves so that they spell out the school's logo, and they will figure out how to do this completely on their own. This is what is known as a Hill Climbing Genetic Algorithm. What that means is that the program simulates evolution. At first, a population of 10 images are assembled, each with a few dots on a white background. The program determines which of those 10 images looks the most like the logo, and it deems that image the 'healthiest gene'. The population then evolves, meaning that each image in the population is replaced by a copy of that healthiest gene, and then each one adds a few more dots. This process keeps repeating itself, and eventually, the image resembles the logo. Each time the population evolves, we call that a new generation (that number below the box represents the number of generations so far). Each time you refresh this page, you will notice that the program takes a different path to reach the same destination. Below is a link to the code I wrote to develop this program."
}

function setup() {
	pixelDensity(1);
	cvs = createCanvas(theLogo.width, theLogo.height);
	generationsText = createElement('p', 'Generations = ' + numOfGenerations);
	generationsText.id("generations");
	header = createElement('h1', "Alex Medoff's Genetic Algorithm");
	paragraph = createElement('p', paragraph_string);
	paragraph.id("main-paragraph");
	note = createElement('p', note_string);
	note.id("please-note");
	link = createElement('a', "Link to Code");
	link.id("viewCode");
	var a = document.getElementById("viewCode");
	a.href = "https://github.com/AlexMedoff/HillClimbGeneticAlgorithm";
	youtubeLink = createElement('a', 'Click Here to See Youtube Video');
	youtubeLink.id("ytlink");
	var a2 = document.getElementById("ytlink");
	a2.href = "https://www.youtube.com/watch?v=SkbHVJ7-mwI";

	mainWrapper = createDiv("");
	mainWrapper.position(50, 50);
	mainWrapper.style("display", "flex");
	mainWrapper.style("flex-direction", "row");

	
	canvasWrapper = createDiv("");
	canvasWrapper.style("flex", "1");
	canvasWrapper.style("order", "1");
	canvasWrapper.style("display", "flex");
	canvasWrapper.style("flex-direction", "column");
	canvasWrapper.style("justify-content", "center");
	canvasWrapper.style("align-items", "center");
	canvasWrapper.child(cvs);
	canvasWrapper.child(generationsText);
	canvasWrapper.parent(mainWrapper);

	textWrapper = createDiv("");
	textWrapper.style("flex", "2");
	textWrapper.style("order", "2");
	textWrapper.style("display", "flex");
	textWrapper.style("flex-direction", "column");
	textWrapper.style("align-items", "flex-start");
	textWrapper.style("margin-left", "10px");
	textWrapper.style("margin-right", "100px");
	textWrapper.child(header);
	textWrapper.child(note);
	textWrapper.child(youtubeLink);
	textWrapper.child(paragraph);
	textWrapper.child(link);
	textWrapper.parent(mainWrapper);

	cvs.style("order", "1");
	generationsText.style("order", "2");
	header.style("order", "1");
	paragraph.style("order", "2");
	link.style("order", "3");
	link.style("margin-top", "15px");
	link.style("margin-bottom", "15px");
	note.style("order", "4");
	youtubeLink.style("margin-top", "10px");
	youtubeLink.style("order", "5");

	thePopulation = new Population(theLogo, popSize);
}

function draw() {
	image(thePopulation.getHealthiest().graphic, 0, 0);
	thePopulation.evolve();
	numOfGenerations++;
	generationsText.html("Generations = " + numOfGenerations);
}
