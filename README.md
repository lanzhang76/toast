# [Toast](http://toast2word.netlify.com)

> A collaboration between [Anna Garbier](https://annagarbier.github.io/portfolio) & [Lan Zhang](iamlanzhang.com)

## What is Toast?

**"Toast"** is a word guessing game, played between a computer program and one or more players. The game begins when the program chooses a mystery word from a large collection of words. The player tries to guess the mystery word by asking a series of *"Is it closer to \___ or \___?"* questions. For example, if the mystery word is **schoolbus**:

><u>Player</u>: Is the mystery word closer to **toast** or **banana**?<br>
<u>Program</u>: **Banana**.<br>
<u>Player</u>: Is it closer to **banana** or **avocado**?<br>
<u>Program</u>: **Banana**.<br>
<u>Player</u>: Is it closer to **banana** or **the color yellow**?<br>
<u>Program</u>: **The color yellow**...

The guessing always starts with **toast**, hence the name of the game!

## What's actually happening?

Behind the scenes, every word in program's "lexicon" is represented as a vector, and plotted in a two-dimensional space. In this space, words that are semantically similar to each other are clustered together; words that are semantically different are far apart. For example, "sofa" and "couch" are close together, but "sofa" and "orca whale" are far apart.

When the program responds to the player's questions, it does so by calculating the distance between the mystery word and the guessed words within the vector space. As the player moves through the space en route to the mystery word, a trail of guesses is drawn to the screen.

![image](/images/00.png)
*A trail of guesses, with the "hints" set to visible. A more challenging version can be played by turning off the visual hints.

## Tools

The words were curated by us, processed with [spaCy word2vec](https://spacy.io/usage/vectors-similarity), scaled and plotted with [Sci-kitLearn t-SNE](https://scikit-learn.org/stable/modules/generated/sklearn.manifold.TSNE.html), and are brought to your browser with [pixi.js](https://www.pixijs.com/). Enjoy!

## Discovering linguistic spaces

Part of the goal of "Toast" is to explore linguistic datasets through play. The game currently has four datasets:

-   Big bag of (random) nouns
-   Animal names
-   Alice in Wonderland
-   Seinfeld

![image](/images/01.png)
*All four datasets, visualized*

![image](/images/02.png)
*The food corner of the Seinfeld dataset*

![image](/images/03.png)
*Creating a custom dataset*
