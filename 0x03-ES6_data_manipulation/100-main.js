import { queryAPI, weakMap } from "./100-weak.js";

const endpoint = { protocol: 'http', name: 'getUsers' };
weakMap.get(endpoint);

try {
  queryAPI(endpoint);
  console.log(weakMap.get(endpoint));

  queryAPI(endpoint);
  console.log(weakMap.get(endpoint));

  queryAPI(endpoint);
  queryAPI(endpoint);
  queryAPI(endpoint);
  queryAPI(endpoint); // This call will throw an error
} catch (error) {
  console.error(error.message);
}

