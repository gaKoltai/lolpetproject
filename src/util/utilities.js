export function apiPost(url, data, callback) {
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

export function apiGet(url, callback) {
  fetch(url, {
    method: "GET"
  })
    .then(response => response.json())
    .then(jsonresponse => {
      callback(jsonresponse);
    });
}

export const rankedEndpoint = "http://localhost:8080/ranked-queues";
export const matchHistoryEndpoint = "http://localhost:8080/match-history";
export const matchSpecificEndpoint = "http://localhost:8080/match-specific";
export const championData =
  "http://ddragon.leagueoflegends.com/cdn/9.23.1/data/en_US/champion.json";
