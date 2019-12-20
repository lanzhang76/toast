## What is Toast?
**"Toast"** is a word guessing game. The goal is to guess the target word the program randomly picks from the chosen word collection. By asking a series of “Is the word closer to WordA or Word B?” questions, the player will navigate through a vector space where words are mapped into vector coordinates based on their similarity to each other within the larger context. The program calculates the distance between the target word and the guessing words, changes the prompt to display the word of smaller of the two distances, and plots the correct guessing trail on the canvas.

The words were curated by us, processed with [spaCy word2vec](https://spacy.io/usage/vectors-similarity), scaled and plotted with [Sci-kitLearn t-SNE](https://scikit-learn.org/stable/modules/generated/sklearn.manifold.TSNE.html), and are brought to your browser with [pixi.js](https://www.pixijs.com/). Enjoy!

A collaboration between [Anna Garbier](https://annagarbier.github.io/) & [Lan Zhang](iamlanzhang.com)

## You can play it here
[toast2word.netlify.com](toast2word.netlify.com)

## Behind the scene


## Dev TODO items

-   wordbank
    -   seinfeld text
    -   clean up existing files if needed
    -   put toast into each wordbank
    -   spread out alice text
-   input checker
    -   strip whitespace
    -   case insensitive
    -   british/english spellings?
-   play-flow
    -   add play again button
    -   add timer / guess counter 'score'
    -   add consecutive guessing counter 
    -   i give up button
-   ui
    -   show/hide 'About' section
    -   clicking 'toast' restarts the game
    -   mobile device