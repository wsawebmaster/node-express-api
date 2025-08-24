import { PlayerModel } from "../models/player-model";


const database: PlayerModel[] = [
    { 
        id: 1, 
        name: "Lionel Messi",
        club: "Paris Saint-Germain",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            Overall: 93,
            Pace: 85,
            Shooting: 94,
            Passing: 91,
            Dribbling: 95,
            Defending: 38,
            Physical: 65
        }
    },
    { 
        id: 2, 
        name: "Cristiano Ronaldo",
        club: "Manchester United",
        nationality: "Portugal",
        position: "Forward",
        statistics: {
            Overall: 92,
            Pace: 89,
            Shooting: 93,
            Passing: 82,
            Dribbling: 88,
            Defending: 35,
            Physical: 78
        }
    },
    { 
        id: 3, 
        name: "Robert Lewandowski",
        club: "Bayern Munich",
        nationality: "Poland",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 80,
            Shooting: 92,
            Passing: 78,
            Dribbling: 83,
            Defending: 40,
            Physical: 84
        }
    },
    { 
        id: 4, 
        name: "Kylian Mbappé",
        club: "Paris Saint-Germain",
        nationality: "France",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 97,
            Shooting: 88,
            Passing: 80,
            Dribbling: 92,
            Defending: 36,
            Physical: 76
        }
    },
    { 
        id: 5, 
        name: "Kevin De Bruyne",
        club: "Manchester City",
        nationality: "Belgium",
        position: "Midfielder",
        statistics: {
            Overall: 91,
            Pace: 76,
            Shooting: 86,
            Passing: 93,
            Dribbling: 88,
            Defending: 64,
            Physical: 78
        }
    },
    { 
        id: 6, 
        name: "Neymar Jr.",
        club: "Paris Saint-Germain",
        nationality: "Brazil",
        position: "Forward",
        statistics: {
            Overall: 90,
            Pace: 88,
            Shooting: 85,
            Passing: 86,
            Dribbling: 94,
            Defending: 37,
            Physical: 63
        }
    },
    { 
        id: 7, 
        name: "Karim Benzema",
        club: "Real Madrid",
        nationality: "France",
        position: "Forward",
        statistics: {
            Overall: 90,
            Pace: 79,
            Shooting: 88,
            Passing: 83,
            Dribbling: 87,
            Defending: 39,
            Physical: 77
        }
    },
    { 
        id: 8, 
        name: "N'Golo Kanté",
        club: "Chelsea",
        nationality: "France",
        position: "Midfielder",
        statistics: {
            Overall: 89,
            Pace: 78,
            Shooting: 66,
            Passing: 81,
            Dribbling: 82,
            Defending: 90,
            Physical: 84
        }
    },
    { 
        id: 9, 
        name: "Mohamed Salah",
        club: "Liverpool",
        nationality: "Egypt",
        position: "Forward",
        statistics: {
            Overall: 89,
            Pace: 90,
            Shooting: 87,
            Passing: 81,
            Dribbling: 89,
            Defending: 45,
            Physical: 75
        }
    },
    { 
        id: 10, 
        name: "Manuel Neuer",
        club: "Bayern Munich",
        nationality: "Germany",
        position: "Goalkeeper",
        statistics: {
            Overall: 89,
            Pace: 54,
            Shooting: 30,
            Passing: 60,
            Dribbling: 45,
            Defending: 88,
            Physical: 80
        }
    },
    { 
        id: 11, 
        name: "Joshua Kimmich",
        club: "Bayern Munich",
        nationality: "Germany",
        position: "Midfielder",
        statistics: {
            Overall: 88,
            Pace: 71,
            Shooting: 73,
            Passing: 88,
            Dribbling: 84,
            Defending: 83,
            Physical: 79
        }
    },
    { 
        id: 12, 
        name: "Virgil van Dijk",
        club: "Liverpool",
        nationality: "Netherlands",
        position: "Defender",
        statistics: {
            Overall: 88,
            Pace: 76,
            Shooting: 60,
            Passing: 71,
            Dribbling: 70,
            Defending: 90,
            Physical: 86
        }
    },
    { 
        id: 13, 
        name: "Sadio Mané",
        club: "Liverpool",
        nationality: "Senegal",
        position: "Forward",
        statistics: {
            Overall: 88,
            Pace: 92,
            Shooting: 85,
            Passing: 78,
            Dribbling: 88,
            Defending: 44,
            Physical: 77
        }
    },
    { 
        id: 14, 
        name: "Bruno Fernandes",
        club: "Manchester United",
        nationality: "Portugal",
        position: "Midfielder",
        statistics: {
            Overall: 87,
            Pace: 74,
            Shooting: 84,
            Passing: 88,
            Dribbling: 83,
            Defending: 65,
            Physical: 78
        }
    },
    { 
        id: 15, 
        name: "Son Heung-min",
        club: "Tottenham Hotspur",
        nationality: "South Korea",
        position: "Forward",
        statistics: {
            Overall: 87,
            Pace: 88,
            Shooting: 87,
            Passing: 80,
            Dribbling: 86,
            Defending: 42,
            Physical: 70
        }
    },
    { 
        id: 16, 
        name: "Alisson Becker",
        club: "Liverpool",
        nationality: "Brazil",
        position: "Goalkeeper",
        statistics: {
            Overall: 87,
            Pace: 52,
            Shooting: 28,
            Passing: 59,
            Dribbling: 43,
            Defending: 86,
            Physical: 78
        }
    },
    { 
        id: 17, 
        name: "Thomas Müller",
        club: "Bayern Munich",
        nationality: "Germany",
        position: "Forward",
        statistics: {
            Overall: 86,
            Pace: 74,
            Shooting: 83,
            Passing: 85,
            Dribbling: 82,
            Defending: 50,
            Physical: 73
        }
    },
    { 
        id: 18, 
        name: "Ruben Dias",
        club: "Manchester City",
        nationality: "Portugal",
        position: "Defender",
        statistics: {
            Overall: 86,
            Pace: 68,
            Shooting: 50,
            Passing: 70,
            Dribbling: 65,
            Defending: 88,
            Physical: 85
        }
    },
    { 
        id: 19, 
        name: "Jadon Sancho",
        club: "Borussia Dortmund",
        nationality: "England",
        position: "Forward",
        statistics: {
            Overall: 86,
            Pace: 87,
            Shooting: 78,
            Passing: 81,
            Dribbling: 90,
            Defending: 38,
            Physical: 65
        }
    }
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
}

export const findPlayerById = async (
    id: number
): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id);
}