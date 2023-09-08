let drawnImage;
let drawnPets = [];

// 8/7: When the drawings stop and collide they stop entirely cause theyre both in each other
//try to either, push them away from each other, or make them follow the mouse and disperse 
//when theyre all touching each other. 

//Making them all follow the mouse and then all dispersing sounds so nice 


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
		this.r = 30;
		this.idle = false;
		this.intersects;
	}
	
	changeIdle(){
		this.lastMouseX = mouseX;
		this.lastMouseY = mouseY;
	}

	idling(){
		if(this.idle){
			this.speed = 0;
		} else {
			this.speed = 4;
		}
	}

	move(){
		scale(1 , 1 + (Math.cos(millis()/400) * .04555), );
		this.idling();
	}


	//make the pets follow you when you click your mouse in
	//the scene.
	clicked(){
		if(this.lastMouseX != 0 && this.lastMouseY != 0 && this.idle == false){
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

	//bool, checks if theyre colliding with each other, gives a true or false val
	intersects = function(other){
		//Get the distances between the ball components
		let d = dist(this.x, this.y, other.x, other.y);

		//Minimum Distance before they are touching
		let minDistance = this.r + other.r;

		//Once they touch or something just stop the movement
		if(d < minDistance){
			this.idle = true;
			return true;
		} else {
			this.idle = false;
			return false;
		}
	}

	display(){
		image(this.drawnImg , this.x, this.y);
	}

}