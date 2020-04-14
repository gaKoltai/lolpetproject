export function formatQueueTypes(queueType: string): string | undefined {
    if (queueType === "RANKED_FLEX_SR") {
        return "Ranked Flex";
    } else if (queueType === "RANKED_SOLO_5x5") {
        return "Ranked Solo/Duo";
    }
}

export function convertRomanNumtoArabic(romanNum: string): string {
    switch (romanNum) {
        case "I":
            return "1";
        case "II":
            return "2";
        case "III":
            return "3";
        case "IV":
            return "4";
        default:
            return "";
    }
}

export function getColorByRank(tier: string): string {
    switch (tier) {
        case "iron":
            return "rgb(162, 146, 148)";
        case "bronze":
            return "rgb(185, 116, 82)";
        case "silver":
            return "rgb(162, 193, 199)";
        case "gold":
            return "rgb(241, 166, 78)";
        case "platinum":
            return "rgb(99, 183, 180)";
        case "diamond":
            return "rgb(116, 141, 249)";
        case "master":
            return "rgb(169, 82, 229)";
        case "grandmaster":
            return "rgb(239, 79, 79)";
        case "challenger":
            return "rgb(244, 200, 116)";
        default:
            return "white";
    }
}

export const rankedEndpoint: string = "http://localhost:5001/api/queues/";
export const matchHistoryEndpoint: string = "http://localhost:5001/api/match-history/";
export const matchSpecificEndpoint: string = "http://localhost:5001/api/match/";
export const championData: string = "http://ddragon.leagueoflegends.com/cdn/9.23.1/data/en_US/champion.json";
//export const matchTypesEndpoint: string = "http://localhost:8080/queue-types";
export const summonerEndpoint: string = "http://localhost:5001/api/summoner/";

export const regions: string[] = ["EUW", "EUNE", "NA", "KR", "OCE", "BR", "TR", "RU", "JP"];
