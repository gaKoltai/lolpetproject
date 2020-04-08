export function formatQueueTypes(queueType: string): string | undefined {
    if (queueType === "RANKED_FLEX_SR") {
        return "Ranked Flex";
    } else if (queueType === "RANKED_SOLO_5x5") {
        return "Ranked Solo/Duo";
    }
}

export const rankedEndpoint: string = "http://localhost:5001/api/queues/";
export const matchHistoryEndpoint: string = "http://localhost:5001/api/match-history/";
export const matchSpecificEndpoint: string = "http://localhost:5001/api/match/";
export const championData: string = "http://ddragon.leagueoflegends.com/cdn/9.23.1/data/en_US/champion.json";
//export const matchTypesEndpoint: string = "http://localhost:8080/queue-types";
export const summonerEndpoint: string = "http://localhost:5001/api/summoner/";

export const regions: string[] = ["EUW", "EUNE", "NA", "KR", "OCE", "BR", "TR", "RU", "JP"];
