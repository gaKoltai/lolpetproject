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

export const rankedEndpoint = "http://localhost:8080/ranked-queues";
export const matchHistoryEndpoint = "http://localhost:8080/match-history";
export const matchSpecificEndpoint = "http://localhost:8080/match-specific";
