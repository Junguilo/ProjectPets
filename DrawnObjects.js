let drawnImage;
let drawnPets = [];

function mouseReleased(){
	demDog.changeIdle();
};

let z = 0;
function createNewPet(){
    
}

class Pets{
	constructor(){
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
		if(drawnImage){
			image(drawnImage , this.x, this.y);
		} else {
			image(demoDog , this.x, this.y);
		}
	}

}