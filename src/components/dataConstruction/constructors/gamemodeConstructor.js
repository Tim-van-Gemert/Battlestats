const ConstructGameModeData = (props) => {
  const { APIData, setGameModeData } = props;

    const gameModeData = [
      { name: APIData.gamemodes[0].gamemodeName, data: APIData.gamemodes[0].winPercent || 0 },
      { name: 'Breakthrough S', data: APIData.gamemodes[1].winPercent || 0 },
      { name: APIData.gamemodes[2].gamemodeName, data: APIData.gamemodes[2].winPercent || 0 },
      { name: 'Conquest S', data: APIData.gamemodes[3].winPercent || 0},
      { name: 'Portal', data: APIData.gamemodes[4].winPercent || 0},
      { name: APIData.gamemodes[5].gamemodeName, data: APIData.gamemodes[5].winPercent || 0},
    ];

    const sortedGameModeData = gameModeData.map(item => {
      const winRate = parseFloat(item.data.replace("%", ""));
      return { name: item.name, data: winRate };
    }).sort((a, b) => b.data - a.data).map(item => {
      const winRateFormatted = item.data.toFixed(2) + "%";
      return { name: item.name, data: winRateFormatted };
    });

    setGameModeData(sortedGameModeData);
};

export default ConstructGameModeData;
