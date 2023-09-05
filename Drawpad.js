let extraCanvas;
let underCanvas;


function clearCanvas(){
	extraCanvas.clear();
}

//used in setup
function createDrawPad(sizeX, sizeY){
    //creates drawing canvas
	extraCanvas = createGraphics(sizeX,sizeY);
	extraCanvas.clear();
	//used to create a white space to draw on, drawings will be transparent
	underCanvas = createGraphics(sizeX,sizeY);
	underCanvas.background(255)
}

//used in Draw to constantly apply pad
function applyDrawPad(x, y){
	//putting the extra canvas here lets you draw ontop of the canvas.
	//can be used for ui when needing to bring up the drawing feature.
	image(underCanvas,x,y); 
	image(extraCanvas,x,y);

}