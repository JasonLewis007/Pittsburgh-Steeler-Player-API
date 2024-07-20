let players = [
    { id: 1, name: 'Ben Roethlisberger', position: 'QB', number: 7 },
    { id: 2, name: 'JuJu Smith-Schuster', position: 'WR', number: 19 },
    { id: 3, name: 'T.J. Watt', position: 'LB', number: 90 }
  ];
  
  exports.getPlayers = (req, res) => {
    res.json(players);
  };
  
  exports.getPlayerById = (req, res) => {
    const player = players.find(p => p.id == req.params.id);
    if (player) {
      res.json(player);
    } else {
      res.status(404).json({ error: 'Player not found' });
    }
  };
  
  exports.createPlayer = (req, res) => {
    const newPlayer = req.body;
    newPlayer.id = players.length ? players[players.length - 1].id + 1 : 1;
    players.push(newPlayer);
    res.status(201).json(newPlayer);
  };
  
  exports.updatePlayer = (req, res) => {
    const player = players.find(p => p.id == req.params.id);
    if (player) {
      Object.assign(player, req.body);
      res.json(player);
    } else {
      res.status(404).json({ error: 'Player not found' });
    }
  };
  
  exports.deletePlayer = (req, res) => {
    players = players.filter(p => p.id != req.params.id);
    res.status(204).end();
  };
  