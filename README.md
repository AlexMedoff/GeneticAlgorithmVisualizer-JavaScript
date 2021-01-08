# Genetic Algorithm Visualizer

**How To Run**

1. Clone repo
2. Open index.html in web browser

**What is a Genetic Algorithm?**
A genetic algorithm applies the principles of natural selection in order to solve novel problems.
The general process begins with the creation of a population of "individuals" (potential solutions
to a given problem). This initial population of individuals is often randomly generated. Then, the
program uses a set of guideliens to determine which individual is the "healthiest", or in other
words, the best possible solution in the current population. Next, a new population is generated
that is all duplicates of that healthiest individual, except each one is "mutated" -- meaning that
some aspect of it is changed randomly. From here, the process repeats: the program finds the new
healthiest individual, and a new population is generated from mutations on that one. Over time, the
solution gets more and more accurate.

**My Implementation**
For this project, I was simply fascinated by the idea of using principles of evolution in algorithms,
and curious as to how that idea could be applied. I wanted to demonstrate the impressive capabilities
of a genetic algorithm in a way that was accessible to anyone, so I set on doing something visual. This
program uses a genetic algorithm in order to replicate any image given to it using only circles of various
opacities.

**How it Works**
The initial population is a set of 10 randomly generated images that consist of a white background with 1-3 circles
on it. The color of the circle is randomly selected between orange, purple, and white, and the opacity and position
of the circle is also randomly selected. Then, the program compares each of these 10 individuals to the true image
(which in this case is the FedEx logo), and determines which is closest to that image. Once the healthiest individual
is selected, a new population is spawned as simple clones of that individual, but then each one is mutated by the addition
of 1-3 randomly generated circles. Each time this process occurs, we call it a new generation, and the program keeps a counter
to keep track of which generation it is on.

**Results**
It's remarkable how quickly this process works. Already by generations 200-300, you can start to make out the overall shape of
logo. By 500 you can probably make out a couple of the letters, and finally around 1000-1200, the logo is very clear and easy to read.
