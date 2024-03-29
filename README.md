# Colors

 A Tic Tac Toe game made in HTML/CSS/JS.

## Design:

* I was inspired by the Colors Youtube channel where musicians sing in a room with muted colors. 

* Removed the grid line, replacing it with a grid gap instead, to make it seem like the board is "built" into the background.

* X and O are disabled by default. I believe that with the overall color-based theme of the game, it was better to have tiles change to different shades. X and O can be enabled by uncommenting the `innerHTML` lines.

### Features:
* Cyan Color Theme: Easy on the eyes
* Win/Loss/Tie Game Logic
* Keeps track of current player
* Declares winner and disables game upon win
* Reset Button
* Replay the order of moves sequentially to see what the last move played was or how you lost.

**Note**
~I built the app around the `isWin` and `checkTie` algorithms. Had I had the time to start over from the beginning and not be in too deep, I would have started over from the css and html in a way that I could have scaled the build up and reduced the amount of JS code needed. I plan on refactoring most of the JS code within the week for efficiency.~

As of 7/28/2019 I have halved the code base.

## Version 
0.9.3 → Refactored `handleClick` function reducing code base by over 50%. Runs 8% faster using `performance.now()`

0.9.2 → Fixed a bug where text was indicating a tie instead of a win when all 9 boxes were filled

0.9.1 → Fixed a bug where players could click outside of the box and have it still count as a successful move

0.9 → Beta Build



## Implementation 
![alt text](images/colors.png)

Demonstration of the replay

![al text](images/demo.gif)


Three key features of this game

* Win Logic implementation
* Tie implementation
* Replay implementation 

**BEWARE MATH BELOW**

**Win Logic**

  * The win logic was implemented using a 2-d array with sizes 3 x 3. To represent an unselected tile, it is denoted with a `0`. Player one's move is denoted with `1` and player two's move is denoted with `-1`. 
  * To check for a win, the `isWin` algorithm checks every single possible sum of every row, column, diagonal, and anti-diagonal whenever a tile is played. 

  *  If the sum of any row, column, diagonal, or  anti-diagonal is `3` or `-3` a player has just played the winning move and the `win` boolean is set to `true`

  * **Issues** - Because the game board is set to a size of 3 x 3 time is not an issue. However it is important to note that the `isWin` has a worst case time complexity of O(2N² + 2/3N).
This is because every time a tile successfully is placed we check every single possible row-sum and column-sum which has a respective time complexity of O(N²). Checking for diagonal and anti-diagonal is trivial with a time complexity of O(1/3N).

  * Scaling this design to a board of 10 x 10 or 25 x 25 would demand a redesign of the algorithm. However it is important to note that, this approach is better than hard coding possible winning combinations, as the algorithm would not need to be modified for boards that are scaled up e.g. 10 x 10 or 25 x 25.

**Tie Logic**

  * The tie logic was implemented using a hash map. At the start of every new game, a hash map is created with a single key of `0` with a value of `9`. 

  * On every successful placement of a tile by either player, the value of `0` is decreased by 1.
  * If the game ends and `0` has a value of 0 and `win` is still false, we know that the all possible squares have been played and that there is no winner, therefore indicating a tie.
 
**Replay Logic**
  
* The replay was implemented using a 3-d array. Every time a player was successful in playing a move, we create a deep copy  of the board's state at that time and push it into a new array that stores all previous board states.

* A `renderBoard` function was created to help decrease repeated code. Whenever the function `replay` is called, it will begin printing each board state out to the board.
* To give it the iterative feeling, we set a `timeOut` function at every boardState during the loop, before calling `renderBoard`.

## Future Updates (Not in order)
1. Give user option to change color scheme of game from muted cyan to something else. 

2. Score board which will keep track of Player 1 and Player 2 wins.

3. Blinking animations for when a winning combination is found.

4. ~Refactor the `handleClick` funtion~

5. ***New*** → Redo the `convertIdx` so that it is scalable.
