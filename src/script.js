import _ from 'loadash'

const Game = (() => {

})();

const Board = (() => {
  const grid = [['', '', ''], ['', '', ''], ['', '', '']];
  const col1 = [grid[0][1], grid[1][1], grid[2][1]];
  const col2 = [grid[0][2], grid[1][2], grid[2][3]];
  const col3 = [grid[0][2], grid[1][2], grid[2][2]];
  const cols = [col1, col2, col3];
  const diag1 = [grid[0][0], grid[1][1], grid[2][2]];
  const diag2 = [grid[0][2], grid[1][1], grid[2][0]];

  const allBoxes = function() {
    return [...grid[0], ...grid[1], ...grid[2]];
  };

  const writeSymbol = function(positionArray, symbol) {
    const [x, y] = positionArray;
    grid[x][y] = symbol;
  };

  const isAvailable = function(positionArray) {
    const [x, y] = positionArray;
    return grid[x][y] === '';
  }

  const fillGridForTesting = function() {
    grid.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        grid[rowIndex][colIndex] = 'X';
      });
    });
  };

  const resetGrid = function() {
    grid.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        grid[rowIndex][colIndex] = '';
      });
    });
  };

  const victoryConditions = function() {
    for (const row of grid) {
      if (row.every(box => box === 'X')) { return 'X'; }
      else if (row.every(box => box === 'O')) { return 'O'; }
    }
    for (const col of cols) {
      if (col.every(box => box === 'X')) { return 'X'; }
      else if (col.every(box => box === 'O')) { return 'O'; }
    }
    if (diag1.every(box => box === 'X')) { return 'X'; }
    if (diag1.every(box => box === 'O')) { return 'O'; }
    if (diag2.every(box => box === 'X')) { return 'X'; }
    if (diag2.every(box => box === 'O')) { return 'O'; }
    return false;
  };

  const evenConditions = function() {
    if (allBoxes().every(square => square !== '')) { return true; }
    return false;
  };
  return { allBoxes, grid, isAvailable, evenConditions, fillGridForTesting,
    resetGrid, victoryConditions, writeSymbol };
})();

const Ui = (() => {
  const victoryMessage = function(playerName) {
    return `${playerName} wins the game! Want to play again?`;
  };
  const evenMessage = 'It\'s a tie, there\'s no winner. Want to play again?';
  const square = document.querySelectorAll('button.play-button');

  // function addListenerForRemoveButtons() {
  //   for (var i=0; i< removeButtons.length; i++) {
  //     removeButtons[i].addEventListener('click', removeBook);
  //   }
  // }

  // showButton.classList.remove('hidden');
  // addBookForm.classList.add('hidden');

  // const highlightListener = function() {
  //   for (let i=0; i < square.length; i++) {
  //     square[i].addEventListener('mouseenter', function {
  //       if (!this.classList.contains("highlight")) {
  //         this.classList.add('highlight');
  //       }
  //     });
  //   }
  // };
  //
  // const removeHighlightListener = function() {
  //   for (let i=0; i < square.length; i++) {
  //     if (this.classList.contains("highlight")) {
  //       square[i].addEventListener('mouseleave', function {
  //         this.classList.remove('highlight');
  //       }
  //     });
  //   }
  // };

  return { evenMessage, highlightListener, removeHighlightListener, victoryMessage };
})();


// FACTORY FUNCTION. When => we need to create multiple objects.
// const PersonFactory = (name, age) => {
//   const sayHello = () => console.log('hello!');
//   return { name, age, sayHello };
// };
//
// const jeff = PersonFactory('jeff', 27);
//
// console.log(jeff.name); // 'jeff'
//
// jeff.sayHello(); // calls the function and logs 'hello!'


const Player = (name, symbol) => {
  // const play = () => ;
  return { name, symbol };
};

Ui.highlightListener();
Ui.removeHighlightListener();
