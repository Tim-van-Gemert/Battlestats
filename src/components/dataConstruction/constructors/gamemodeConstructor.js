const ConstructGameModeData = (props) => {
  const { APIData, setGameModeData } = props;

    const gameModeData = [
      { name: APIData.gamemodes[0].gamemodeName, data: APIData.gamemodes[0].winPercent },
      { name: 'Breakthrough S', data: APIData.gamemodes[1].winPercent },
      { name: APIData.gamemodes[2].gamemodeName, data: APIData.gamemodes[2].winPercent },
      { name: 'Conquest S', data: APIData.gamemodes[3].winPercent },
      { name: 'Portal', data: APIData.gamemodes[4].winPercent },
      { name: APIData.gamemodes[5].gamemodeName, data: APIData.gamemodes[5].winPercent },
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
