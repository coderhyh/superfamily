export function getData(url, fn) {
  // const baseUrl = '/jia';
  const baseUrl = 'http://39.96.88.57:1111';
  fetch(baseUrl + url)
    .then(r => r.json())
    .then(fn)
}