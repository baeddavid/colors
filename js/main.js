/*----- app's state (variables) -----*/ 
let board, map, history;
let isPlayer1, winnerPresent;
/*----- event listeners -----*/ 
document.querySelector('section.playable').addEventListener('click', handleClick);
document.getElementById('reset').addEventListener('click', reset);
document.getElementById('rply').addEventListener('click', replay);
/*----- functions -----*/
play();

function reset() {
    play();
    document.querySelector('.win').innerHTML = '';
    document.querySelector('.player').innerHTML = 'Player: 1'
    let x = document.querySelector('section.playable')
    x.addEventListener('click', handleClick)
    for(let i = 0; i < 9; i++) {
        let marker = document.getElementById(`bx${i}`);
        marker.style.backgroundColor = '#0da192';
        // marker.innerHTML = '';
    }
}

function play() {
    board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    history = [],
    map = new Map();
    map.set(0, 9);
    isPlayer1 = true;
    winnerPresent = false;
}

function replay() {
    for(let i = 0; i < 9; i++) {
        let marker = document.getElementById(`bx${i}`);
        marker.style.backgroundColor = '#0da192';
        // marker.innerHTML = '';
    }
    let interval = 750;
    history.forEach(function(el, index) {
        document.querySelector('.player').innerHTML = '';
        setTimeout(function() {
            renderBoard(el);
        }, index * interval);
    });
}

function renderBoard(gameState) {
    let rowCounter = 0;
    for(let x of gameState) {
        if(rowCounter == 0){
            for(let idx = 0; idx < x.length; idx++) {
                if(x[idx] == 1) {
                    render1(idx);
                }
                if(x[idx] == -1)
                    render_1(idx);    
            }
        } if(rowCounter == 1){
            for(let idx = 0; idx < x.length; idx++) {
                if(x[idx] == 1)
                    render1(idx + 3);
                if(x[idx] == -1)
                    render_1(idx + 3);    
            }
        } if(rowCounter == 2){
            for(let idx = 0; idx < x.length; idx++) {
                if(x[idx] == 1)
                    render1(idx + 6);
                if(x[idx] == -1)
                    render_1(idx + 6);    
            }
        }
        rowCounter++;
    }
    return;
}

function render1(i) {
    let marker = document.getElementById(`bx${i}`);
    // marker.innerHTML = '<span class="mrk">X</span>';
    marker.style.backgroundColor = '#1de9b6'; 
}

function render_1(i) {
    let marker = document.getElementById(`bx${i}`);
    // marker.innerHTML = '<span class="mrk">O</span>';
    marker.style.backgroundColor = '#AFEEEE';
}

function render(idx) {
    if(!winnerPresent) {
        let marker = document.getElementById(`bx${idx}`);
        if(isPlayer1)
            marker.style.backgroundColor = '#1de9b6'; 
        else
            marker.style.backgroundColor = '#AFEEEE';   
    }
}

function handleClick(evt) {
    let idx = parseInt(evt.target.id.replace('bx', ''));
    let idx2d = convertIdx(idx);
    if(isPlayer1) { 
        if(board[idx2d[0]][idx2d[1]] != 0) {
            alert('TILE HAS ALREADY BEEN CHOSEN');
            return;
        } else
            board[idx2d[0]][idx2d[1]] = 1;    
        history.push(board.map(inner => inner.slice()));    
        map.set(0, map.get(0) - 1);
        render(idx);
        checkWin();
        checkTie();
        if(winnerPresent) {
            document.querySelector('.win').innerHTML = '<span class="dsp">You Win!</span>';
            return;
        }
        isPlayer1 = false;
        document.querySelector('.player').innerHTML = 'Player: 2' 
    } else {
        if(board[idx2d[0]][idx2d[1]] != 0) {
            alert('TILE HAS ALREADY BEEN CHOSEN');
            return;
        } else
            board[idx2d[0]][idx2d[1]] = -1;
        history.push(board.map(inner => inner.slice()));    
        map.set(0, map.get(0) - 1);    
        render(idx);
        checkWin();
        checkTie();
        if(winnerPresent) {
            document.querySelector('.win').innerHTML = '<span class="dsp">You Win!</span>';
            return;
        }
        isPlayer1 = true;
        document.querySelector('.player').innerHTML = 'Player: 1' 
    }
}

function convertIdx(idx) {
    switch(idx) {
        case 0: 
            return [0,0]
        case 1: 
            return [0,1]
        case 2:
            return [0,2]
        case 3: 
            return [1,0]
        case 4:
            return [1,1]
        case 5:
            return [1,2]
        case 6:
            return [2,0]
        case 7: 
            return [2,1]
        case 8:
            return [2,2]            
    }
}

function checkTie() {
    if(!winnerPresent && map.get(0) == 0)
        document.querySelector('.win').innerHTML = '<span class="dsp">TIE!</span>';
}

function checkWin() {
    // O(2N^2 + 2/3N) time complexity
    // This is because we check for every possible win condition(every row, every col)
    // which has a O(N^2) time complexity. Finding diagnol and anti-diagnol sum can each 
    // be done in O(1/3N)
    let sum = 0;
    // Check every sum of column. If row is -3 or 3,   // we have a winner
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board.length; j++) {
            sum += board[j][i]
        }
        if(Math.abs(sum) == 3) {
            x.removeEventListener('click', handleClick);
            winnerPresent = true;
        }
        else
            sum = 0;
    }
  
  // Check every sum of row. If row is -3 or 3 we 
  // have a winner
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board.length; j++) {
            sum += board[i][j];
        }
        if(Math.abs(sum) == 3) {
            x.removeEventListener('click', handleClick);
            winnerPresent = true;
        }
        else
            sum = 0;
    }
  
  // Check diagnol for -3 or 3
    for(let i = 0, j = 0; i < board.length; i++, j++){
        sum += board[i][j];   
    } 
    if(Math.abs(sum) == 3) {
        x.removeEventListener('click', handleClick);
        winnerPresent = true;
    }
    else
        sum = 0;
  
  
  
  // Check for anti-dianol for -3 or 3
    for(let i = 0, j = board.length - 1; i < board.length; i++, j--) {
        sum += board[i][j];
    } 
    if(Math.abs(sum) == 3) {
        x.removeEventListener('click', handleClick);
        winnerPresent = true;
    }
    // If we have not yet returned true, we know that there are no wins and that it is a tie
}