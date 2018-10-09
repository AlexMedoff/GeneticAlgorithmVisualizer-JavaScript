# HillClimbGeneticAlgorithmYaleLogo
This is a project I've been working on for a little bit now. I had read about genetic algorithms and I though they were an interesting section of computer programming, so I got to work coding one. I centered the image processing idea around the Yale logo because it is a school I am interested in applying to, so I thought maybe they would appreciate a show of school spirit in a very fun, unique way. Initially, I used Processing with Java to code a version of the genetic algorith that used just pixels to form the Yale logo. That version was a true genetic algorithm (not hill climb), but I thought it wasn't very visual because it was hard to see each individual pixel being changed. After some more research online, I came across the concept of programs that produced images using a variety of shapes, and the idea intrigued me. So I got to work developing a program that would create the Yale logo using just blue and white circles, and that is where I am today. The code itself is in javascript and it uses the p5.js library. It's broken into 3 main javascript files: main.js, population.js, and gene.js.

Gene.js is a class that holds the information for each individual graphic in the population. It has a p5.graphics object and functions like mutate() which draws circles onto that graphic.

Population.js is a class that holds an array of 10 Genes. Its most important method is evolve(), which creates a new population of Genes that are based off of the best gene from the previous population.

Main.js simply uses the p5.js preload(), setup(), and draw() functions to assemble the html DOM and display the canvas with the best Genes being looped through.

I hope other people may use this code to help them create their own genetic algorithms! I had a lot of fun working on this project!
