const team = {
  _players: [
    {firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 11}
  ],
  _games: [
      {opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27}
  ],
  get players() {
    return this._players;
  },
  
  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age){
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age};

      this._players.push(player);
    },
    
    addGame: function(opponentName, teamPoints, opponentPoints) {
      const Game = {opponent: opponentName,
            teamPoints: teamPoints,
             opponentPoints: opponentPoints};
            
      this._games.push(Game);
    },
  
};
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);;
console.log(team.players)

team.addGame('Rocket', 1, 3);
team.addGame('Bears', 3, 1);
team.addGame('The Squad', 3, 0);
console.log(team.games);