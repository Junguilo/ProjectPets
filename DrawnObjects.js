let drawnImage;
let drawnPets = [];

// 8/7: When the drawings stop and collide they stop entirely cause theyre both in each other
//try to either, push them away from each other, or make them follow the mouse and disperse 
//when theyre all touching each other. 

//Making them all follow the mouse and then all dispersing sounds so nice 
//You can do this by making them all follow to the same mouse position
//once THEY ARE ALL IN THE MOUSE POSITION, make them disperse 
//into a random x and y value within a radius of the mouse click. 

//got the variable when the character is in mouse position

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
		this.idleX = false;
		this.idleY = false;
		this.intersects;
	}
	
	changeIdle(){
		this.lastMouseX = mouseX;
		this.lastMouseY = mouseY;
	}


	move(){
		scale(1 , 1 + (Math.cos(millis()/400) * .04555), );
		//print("idleX: " + this.idleX);
		//print("idleY: " + this.idleY);
		print("idle: " + this.idle);
	}


	//make the pets follow you when you click your mouse in
	//the scene.
	clicked(){
		//setting this to 0 makes it so it doesnt move instantly 
		if(this.lastMouseX != 0 && this.lastMouseY != 0){

			//the reason why I have the +- 1 because of jittering
			if(this.lastMouseX + 1 < this.x - 1){
				this.x -= this.speed;
				this.idleX = false;
			} else if(this.lastMouseX - 1 > this.x + 1){
				this.x += this.speed;
				this.idleX = false;
			} else {
				this.idleX = true;
			}

			if(this.lastMouseY + 1 < this.y - 1){
				this.y -= this.speed;
				this.idleY = false;
			} else if(this.lastMouseY - 1 > this.y + 1){
				this.y += this.speed;
				this.idleY = false;
			}  else {
				this.idleY = true;
			}

			if(this.idleX == true && this.idleY == true){
				this.idle = true;
			} else {
				this.idle = false;
			}
		}
	}

	//bool, checks if theyre colliding with each other, gives a true or false val
	//Do not put this.idle = true in here, will make the drawings stop entirely for some reaosn. 
	intersects = function(other){
		//Get the distances between the ball components
		let d = dist(this.x, this.y, other.x, other.y);

		//Minimum Distance before they are touching
		let minDistance = this.r + other.r;

		//Once they touch or something just stop the movement
		if(d < minDistance){
			return true;
		} else {
			return false;
		}
	}

	display(){
		image(this.drawnImg , this.x, this.y);
	}

}