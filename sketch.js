
let demoDog;
let bg;

function preload(){
	demoDog = loadImage('DemoDog.png');
	bg = loadImage('miiPlaza.png');
}

function setup() 
{
	createCanvas(windowWidth, windowHeight);
	//background(bg);

	//creates drawing canvas
	createDrawPad(270, 270);

	//Create a button for saving the canvas
	saveBtn = createButton("save Canvas");
	saveBtn.position(30,280);
	saveBtn.mousePressed(saveToFile);

	//Clear the canvas
	removeBtn = createButton("Clear");
	removeBtn.position(120, 280);
	removeBtn.mousePressed(clearCanvas);

}

//Keeps window sized as the window its currently on. 
function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function draw()
{	
	background(bg);

	//draw the pad
	applyDrawPad(0, 0);

	//with objects you have to move, and then display the image
	for(let i = 0; i < drawnPets.length; i++){
		drawnPets[i].move();
		drawnPets[i].display();
		drawnPets[i].clicked();
		for(let j = 0; j < drawnPets.length;j++){
			if(i != j && drawnPets[i].intersects(drawnPets[j])){
				//Once you are on the mouse position, push yourself away from the object
				if(drawnPets[i].idle == true){
					print("TETE");
				}
			}
		}
	}
	//you can limit where the mouse can draw by adding clamps or restrictions
	//do later
	if(mouseIsPressed){
		//when you click on the canvas
		extraCanvas.strokeWeight(4);
		extraCanvas.line(mouseX,mouseY, pmouseX, pmouseY);
	}

}

