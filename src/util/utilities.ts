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
export const rankedEndpoint: string = "http://localhost:8080/ranked-queues";
export const matchHistoryEndpoint: string =
  "http://localhost:8080/match-history";
export const matchSpecificEndpoint: string =
  "http://localhost:8080/match-specific";
export const championData: string =
  "http://ddragon.leagueoflegends.com/cdn/9.23.1/data/en_US/champion.json";
export const matchTypesEndpoint: string = "http://localhost:8080/queue-types";
export const summonerEndpoint: string = "http://localhost:8080/summoner";
