// //// same with descriptive names

const rockPaperScissors = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    var rules = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };
    if (p2 === rules[p1]) {
        return "Player 1 won!";
    }
    else {
        return "Player 2 won!";
    }
};

// ///
const rps = (p1, p2) => {
    var map = {
        'rock': 'scissors',
        'scissors': 'paper',
        'paper': 'rock'
    };

    if (p1 == p2) {
        return 'Draw!';
    } else {
        return 'Player ' + (map[p1] == p2 ? 1 : 2) + ' won!';
    }
};
