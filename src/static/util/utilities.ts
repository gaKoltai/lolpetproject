import { exportDefaultSpecifier } from "@babel/types";
import { QueueTypes } from "./jsonDataInterfaces";

export function apiPost(url: string, data: any, callback: any): void {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(jsonresponse => {
            callback(jsonresponse);
        });
}

export function apiGet(url: string, callback: any): void {
    fetch(url, {
        method: "GET"
    })
        .then(response => response.json())
        .then(jsonresponse => {
            callback(jsonresponse);
        });
}

export function calculatePosition(role: string, lane: string, queue: QueueTypes): string | undefined {
    if (queue.description !== "Normal" && queue.description !== "Ranked") {
        return "FILL";
    } else if (lane != "NONE" && lane !== "BOTTOM") {
        return lane;
    } else if (lane === "BOTTOM" && role !== "NONE" && role !== "SOLO") {
        return role;
    } else if (lane === "NONE" && (role === "DUO" || role === "SOLO")) {
        return "FILL";
    } else if (lane === "NONE" && role !== "NONE") {
        return role;
    } else {
        return "FILL";
    }
}

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

export const regions: string[] = ["EUW", "EUNE", "NA", "KR", "OCE", "LAN", "LAS"];
