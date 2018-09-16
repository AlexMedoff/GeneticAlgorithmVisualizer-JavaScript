function Population(targetImage, popSize) {
	this.target = targetImage;
	this.populationSize = popSize;
	this.genes = [];

	for (var i=0; i < this.populationSize; i++) {
		this.genes[i] = new Gene(this.target);
		this.genes[i].mutate();
		this.genes[i].evaluateFitness();
	}

	this.determineHealthiestIndex = function() {
		var worstFitness = new Gene(this.target);
		worstFitness.setFitness(Number.MAX_SAFE_INTEGER);
		var healthiest = worstFitness;
		var indexOfHealthiest;
		for (var i=0; i < this.populationSize; i++) {
			if (this.genes[i].fitness < healthiest.fitness) {
				healthiest = this.genes[i];
				indexOfHealthiest = i;
			}
		}
		return indexOfHealthiest;
	}

	this.getHealthiest = function() {
		var index = this.determineHealthiestIndex();
		return this.genes[index];
	}

	this.evolve = function() {
		var healthiestGene = this.getHealthiest();
		//this.genes = [];
		for (var i=0; i < this.populationSize; i++) {
			//this.genes[i] = new Gene(this.target);
			this.genes[i].graphic.image(healthiestGene.graphic, 0, 0);
			// this.genes[i].graphic.loadPixels();
			// for (var j=0; j < healthiestGene.numPixels; j++){
			// 	this.genes[i].graphic.pixels[j] = healthiestGene.graphic.pixels[j];
			// }
			// this.genes[i].graphic.updatePixels();
			if (i!=0) {
				this.genes[i].mutate();
			}
			this.genes[i].evaluateFitness();
		}
	}
}