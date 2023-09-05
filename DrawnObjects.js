let drawnImage;
let drawnPets = [];


//saves the whole canvas into the Pet Object
function saveToFile(){
	drawnImage = extraCanvas.get();
	drawnPets.push(new Pets(drawnImage));

}

function mouseReleased(){
	for(let i = 0; i < drawnPets.length; i++){
		drawnPets[i].changeIdle();
	}
}

class Pets{
	constructor(drawnImage){
		this.drawnImg = drawnImage;
		this.x = 400;
		this.y = 400;
		this.speed = 4;
		this.lastMouseX = 0;
		this.lastMouseY = 0;
	}
	
	changeIdle(){
		this.lastMouseX = mouseX;
		this.lastMouseY = mouseY;
	}

	move(){
		scale(1 , 1 + (Math.cos(millis()/400) * .04555), )
	}


	//make the pets follow you when you click your mouse in
	//the scene.
	clicked(){
		if(this.lastMouseX != 0 && this.lastMouseY != 0){
			if(this.lastMouseX + 1 < this.x - 1){
				this.x -= this.speed;
			} else if(this.lastMouseX - 1 > this.x + 1){
				this.x += this.speed;
			} 

			if(this.lastMouseY + 1 < this.y - 1){
				this.y -= this.speed;
			} else if(this.lastMouseY -1 > this.y + 1){
				this.y += this.speed;
			} 

			if(this.lastMouseX == this.x && this.lastMouseY == this.y){
				this.idle = true;
			}
		}
	}

	idle(){

	}

	display(){
		image(this.drawnImg , this.x, this.y);
	}

}