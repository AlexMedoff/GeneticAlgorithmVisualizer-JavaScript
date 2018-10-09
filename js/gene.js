var mutationRateMax = 3;

function Gene(targetImage) {
	this.target = targetImage;
	this.target.loadPixels();
	this.graphic_width = this.target.width;
	this.graphic_height = this.target.height;
	this.numPixels = this.target.pixels.length;
	this.fitness = 0;

	this.graphic = createGraphics(this.graphic_width, this.graphic_height);
	this.graphic.background(255);

	this.setFitness = function(fitnessInput) {
		this.fitness = fitnessInput;
	}

	this.mutate = function() {
		var radius;
		var c;
		var x;
		var y;

		for (var i=0; i < random(1,mutationRateMax); i++) {
			radius = random(30);
			c = randomColor();
			this.graphic.noStroke();
			this.graphic.fill(c);
			x = random(this.graphic_width);
			y = random(this.graphic_height);
			this.graphic.ellipse(x, y, radius, radius);
		}
	}

	this.evaluateFitness = function() {
		var newFitness = 0;
		this.graphic.loadPixels();
		for (var i=0; i < this.numPixels; i++) {
			newFitness += abs((this.target.pixels[i]) - (this.graphic.pixels[i]));
		}
		this.fitness = newFitness;
	}
}

function randomColor() {
	var returnColor;
	var randomFloat = random();
	if (randomFloat < .5) {
		returnColor = color(0, 53, 107, random(255));
	}
	else {
		returnColor = color(255, 255, 255, random(255));
	}
	return returnColor;
}

