/*----- constants -----*/ 
/*----- app's state (variables) -----*/ 
let board, map, history;
let isPlayer1, turn, win;
/*----- cached element references -----*/ 
/*----- event listeners -----*/ 
let x = document.querySelector('section.playable')
x.addEventListener('click', handleClick)

let rst = document.getElementById('reset'); 
rst.addEventListener('click', reset);

let rply = document.getElementById('rply');
rply.addEventListener('click', replay);

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
    turn = 1;
    win;
    
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
                if(x[idx] == 1)
                    render1(idx);
                if(x[idx] == -1)
                    render2(idx);    
            }
        } if(rowCounter == 1){
            for(let idx = 0; idx < x.length; idx++) {
                if(x[idx] == 1)
                    render1(idx + 3);
                if(x[idx] == -1)
                    render2(idx + 3);    
            }
        } if(rowCounter == 2){
            for(let idx = 0; idx < x.length; idx++) {
                if(x[idx] == 1)
                    render1(idx + 6);
                if(x[idx] == -1)
                    render2(idx + 6);    
            }
        }
        rowCounter++;
    }
}

function render1(i) {
    let marker = document.getElementById(`bx${i}`);
    // marker.innerHTML = '<span class="mrk">X</span>';
    marker.style.backgroundColor = '#1de9b6'; 
}

function render2(i) {
    let marker = document.getElementById(`bx${i}`);
    // marker.innerHTML = '<span class="mrk">O</span>';
    marker.style.backgroundColor = '#AFEEEE';
}

function handleClick(evt) {
    let i = evt.target.id.replace('bx', '');
    if(isPlayer1) {
        if(i == 0) {
            if(board[0][0] == 1 || board[0][0] == -1) {
                alert('ALREADY TAKEN PLEASE TRY AGAIN');
            } else {
                board[0][0] = 1;
                history.push(board.map(inner => inner.slice()));
                document.querySelector('.player').innerHTML = 'Player: 2'
                isPlayer1 = false;
                render1(i);                
                let win = checkWin();
                if(win) {
                    document.querySelector('.win').innerHTML = '<span class="dsp">You Win!</span>';
                    document.querySelector('.player').innerHTML = 'Player: 1'
                }
                map.set(0, map.get(0) - 1);
                checkTie();
            }
        }
        if(i == 1) {
            if(board[0][1] == 1 || board[0][1] == -1) {
                alert('ALREADY TAKEN PLEASE TRY AGAIN');
            } else {
                board[0][1] = 1;
                history.push(board.map(inner => inner.slice()));
                document.querySelector('.player').innerHTML = 'Player: 2'
                isPlayer1 = false;
                render1(i);
                let win = checkWin();
                if(win) {
                    document.querySelector('.win').innerHTML = '<span class="dsp">You Win!</span>';
                    document.querySelector('.player').innerHTML = 'Player: 1'
                }
                map.set(0, map.get(0) - 1);   
                checkTie(); 
            }
        }
        if(i == 2) {
            if(board[0][2] == 1 || board[0][2] == -1) {
                alert('ALREADY TAKEN PLEASE TRY AGAIN');
            } else {
                board[0][2] = 1;
                history.push(board.map(inner => inner.slice()));;
                document.querySelector('.player').innerHTML = 'Player: 2'
                isPlayer1 = false;
                render1(i);
                let win = checkWin();
                console.log(win);
                if(win) {
                    document.querySelector('.win').innerHTML = '<span class="dsp">You Win!</span>';
                    document.querySelector('.player').innerHTML = 'Player: 1'
                    return;
                }
                map.set(0, map.get(0) - 1);
                checkTie();
            }
        }
        if(i == 3) {
            if(board[1][0] == 1 || board[1][0] == -1) {
                alert('ALREADY TAKEN PLEASE TRY AGAIN');
            } else {
                board[1][0] = 1;
                history.push(board.map(inner => inner.slice()));;
                document.querySelector('.player').innerHTML = 'Player: 2'
                isPlayer1 = false;
                render1(i);
                let win = checkWin();
                if(win) {
                    document.querySelector('.win').innerHTML = '<span class="dsp">You Win!</span>';
                    document.querySelector('.player').innerHTML = 'Player: 1'
                    return;
                }
                map.set(0, map.get(0) - 1);
                checkTie();
            }
        } 
        if(i == 4) {
            if(board[1][1] == 1 || board[1][1] == -1) {
                alert('ALREADY TAKEN PLEASE TRY AGAIN');
            } else {
                board[1][1] = 1;
                history.push(board.map(inner => inner.slice()));;
                document.querySelector('.player').innerHTML = 'Player: 2'
                isPlayer1 = false;
                render1(i);
                let win = checkWin();
                if(win) {
                    document.querySelector('.win').innerHTML = '<span class="dsp">You Win!</span>';
                    document.querySelector('.player').innerHTML = 'Player: 1'
                    return;
                }
                map.set(0, map.get(0) - 1);
                checkTie();
            }
        }
        if(i == 5) {
            if(board[1][2] == 1 || board[1][2] == -1) {
                alert('ALREADY TAKEN PLEASE TRY AGAIN');
            } else {
                board[1][2] = 1;
                history.push(board.map(inner => inner.slice()));;
                document.querySelector('.player').innerHTML = 'Player: 2'
                isPlayer1 = false;
                render1(i);
                let win = checkWin();
                if(win) {
                    document.querySelector('.win').innerHTML = '<span class="dsp">You Win!</span>';
                    document.querySelector('.player').innerHTML = 'Player: 1'
                    return;
                }
                map.set(0, map.get(0) - 1);
                checkTie();
            }
        }
        if(i == 6) {
            if(board[2][0] == 1 || board[2][0] == -1) {
                alert('ALREADY TAKEN PLEASE TRY AGAIN');
            } else {
                board[2][0] = 1;
                history.push(board.map(inner => inner.slice()));;
                document.querySelector('.player').innerHTML = 'Player: 2'
                isPlayer1 = false;
                render1(i);
                let win = checkWin();
                if(win) {
                    document.querySelector('.win').innerHTML = '<span class="dsp">You Win!</span>';
                    document.querySelector('.player').innerHTML = 'Player: 1'
                    return;
                }
                map.set(0, map.get(0) - 1);
                checkTie();
            }
        }
        if(i == 7) {
            if(board[2][1] == 1 || board[2][1] == -1) {
                alert('ALREADY TAKEN PLEASE TRY AGAIN');
            } else {
                board[2][1] = 1;
                history.push(board.map(inner => inner.slice()));;
                document.querySelector('.player').innerHTML = 'Player: 2'
                isPlayer1 = false;
                render1(i);
                let win = checkWin();
                if(win) {
                    document.querySelector('.win').innerHTML = '<span class="dsp">You Win!</span>';
                    document.querySelector('.player').innerHTML = 'Player: 1'
                    return;
                }
                map.set(0, map.get(0) - 1);
                checkTie();
            }
        }
        if(i == 8) {
            if(board[2][2] == 1 || board[2][2] == -1) {
                alert('ALREADY TAKEN PLEASE TRY AGAIN');
            } else {
                board[2][2] = 1;
                history.push(board.map(inner => inner.slice()));;
                document.querySelector('.player').innerHTML = 'Player: 2'
                isPlayer1 = false;
                render1(i);
                let win = checkWin();
                if(win) {
                    document.querySelector('.win').innerHTML = '<span class="dsp">You Win!</span>';
                    document.querySelector('.player').innerHTML = 'Player: 1'
                    return;
                }
                map.set(0, map.get(0) - 1);
                checkTie();
            }
        }
        
    } else {
        if(i == 0) {
            if(board[0][0] == 1 || board[0][0] == -1) {
                alert('ALREADY TAKEN PLEASE TRY AGAIN');
            } else {
                board[0][0] = -1;
                history.push(board.map(inner => inner.slice()));;
                document.querySelector('.player').innerHTML = 'Player: 1'
                isPlayer1 = true;
                render2(i);
                let win = checkWin();
                if(win) {
                    document.querySelector('.win').innerHTML = '<span class="dsp">You Win!</span>';
                    return;
                }
                map.set(0, map.get(0) - 1);
                checkTie();
            }
        }
        if(i == 1) {
            if(board[0][1] == 1 || board[0][1] == -1) {
                alert('ALREADY TAKEN PLEASE TRY AGAIN');
            } else {
                board[0][1] = -1;
                history.push(board.map(inner => inner.slice()));;
                document.querySelector('.player').innerHTML = 'Player: 1'
                isPlayer1 = true;
                render2(i);
                let win = checkWin();
                if(win) {
                    document.querySelector('.win').innerHTML = '<span class="dsp">You Win!</span>';
                    document.querySelector('.player').innerHTML = 'Player: 2'
                    return;
                }
                map.set(0, map.get(0) - 1);
                checkTie();
            }
        }
        if(i == 2) {
            if(board[0][2] == 1 || board[0][2] == -1) {
                alert('ALREADY TAKEN PLEASE TRY AGAIN');
            } else {
                board[0][2] = -1;
                history.push(board.map(inner => inner.slice()));;
                document.querySelector('.player').innerHTML = 'Player: 1'
                isPlayer1 = true;
                render2(i);
                let win = checkWin();
                if(win) {
                    document.querySelector('.win').innerHTML = '<span class="dsp">You Win!</span>';
                    document.querySelector('.player').innerHTML = 'Player: 2'
                    return;
                }
                map.set(0, map.get(0) - 1);
                checkTie();
            }
        }
        if(i == 3) {
            if(board[1][0] == 1 || board[1][0] == -1) {
                alert('ALREADY TAKEN PLEASE TRY AGAIN');
            } else {
                board[1][0] = -1;
                history.push(board.map(inner => inner.slice()));;
                document.querySelector('.player').innerHTML = 'Player: 1'
                isPlayer1 = true;
                render2(i);
                let win = checkWin();
                if(win) {
                    document.querySelector('.win').innerHTML = '<span class="dsp">You Win!</span>';
                    document.querySelector('.player').innerHTML = 'Player: 2'
                    return;
                }
                map.set(0, map.get(0) - 1);
                checkTie();
            }
        }
        if(i == 4) {
            if(board[1][1] == 1 || board[1][1] == -1) {
                alert('ALREADY TAKEN PLEASE TRY AGAIN');
            } else {
                board[1][1] = -1;
                history.push(board.map(inner => inner.slice()));;
                document.querySelector('.player').innerHTML = 'Player: 1'
                isPlayer1 = true;
                render2(i);
                let win = checkWin();
                if(win) {
                    document.querySelector('.win').innerHTML = '<span class="dsp">You Win!</span>';
                    document.querySelector('.player').innerHTML = 'Player: 2'
                    return;
                }
                map.set(0, map.get(0) - 1);
                checkTie();
            }
        }
        if(i == 5) {
            if(board[1][2] == 1 || board[1][2] == -1) {
                alert('ALREADY TAKEN PLEASE TRY AGAIN');
            } else {
                board[1][2] = -1;
                history.push(board.map(inner => inner.slice()));;
                document.querySelector('.player').innerHTML = 'Player: 1'
                isPlayer1 = true;
                render2(i);
                let win = checkWin();
                if(win) {
                    document.querySelector('.win').innerHTML = '<span class="dsp">You Win!</span>';
                    document.querySelector('.player').innerHTML = 'Player: 2'
                    return;
                }
                map.set(0, map.get(0) - 1);
                checkTie();
            }
        }
        if(i == 6) {
            if(board[2][0] == 1 || board[2][0] == -1) {
                alert('ALREADY TAKEN PLEASE TRY AGAIN');
            } else {
                board[2][0] = -1;
                history.push(board.map(inner => inner.slice()));;
                document.querySelector('.player').innerHTML = 'Player: 1'
                isPlayer1 = true;
                render2(i);
                let win = checkWin();
                if(win) {
                    document.querySelector('.win').innerHTML = '<span class="dsp">You Win!</span>';
                    document.querySelector('.player').innerHTML = 'Player: 2'
                    return;
                }
                map.set(0, map.get(0) - 1);
                checkTie();
            }
        }
        if(i == 7) {
            if(board[2][1] == 1 || board[2][1] == -1) {
                alert('ALREADY TAKEN PLEASE TRY AGAIN');
            } else {
                board[2][1] = -1;
                history.push(board.map(inner => inner.slice()));;
                document.querySelector('.player').innerHTML = 'Player: 1'
                isPlayer1 = true;
                render2(i);
                let win = checkWin();
                if(win) {
                    document.querySelector('.win').innerHTML = '<span class="dsp">You Win!</span>';
                    document.querySelector('.player').innerHTML = 'Player: 2'
                    return;
                }
                map.set(0, map.get(0) - 1);
                checkTie();
            }
        }
        if(i == 8) {
            if(board[2][2] == 1 || board[2][2] == -1) {
                alert('ALREADY TAKEN PLEASE TRY AGAIN');
            } else {
                board[2][2] = -1;
                history.push(board.map(inner => inner.slice()));;
                document.querySelector('.player').innerHTML = 'Player: 1'
                isPlayer1 = true;
                render2(i);
                let win = checkWin();
                if(win) {
                    document.querySelector('.win').innerHTML = '<span class="dsp">You Win!</span>';
                    document.querySelector('.player').innerHTML = 'Player: 2'
                    return;
                }
                map.set(0, map.get(0) - 1);
                checkTie();
            }
        }    
    }
}

function checkTie() {
    if(!win && map.get(0) == 0)
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
        if(sum == -3 || sum == 3) {
            x.removeEventListener('click', handleClick);
            return true;
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
        if(sum == -3 || sum == 3) {
            x.removeEventListener('click', handleClick);
            return true;
        }
        else
            sum = 0;
    }
  
  // Check diagnol for -3 or 3
    for(let i = 0, j = 0; i < board.length; i++, j++){
        sum += board[i][j];   
    } 
    if(sum == -3 || sum == 3) {
        x.removeEventListener('click', handleClick);
        return true;
    }
    else
        sum = 0;
  
  
  
  // Check for anti-dianol for -3 or 3
    for(let i = 0, j = board.length - 1; i < board.length; i++, j--) {
        sum += board[i][j];
    } 
    if(sum == -3 || sum == 3) {
        x.removeEventListener('click', handleClick);
        return true;
    }
    
    // If we have not yet returned true, we know that there are no wins and that it is a tie
    return false;
}
