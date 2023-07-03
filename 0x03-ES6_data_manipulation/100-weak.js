// Create a new instance of WeakMap
const weakMap = new WeakMap();

// Export the weakMap
export { weakMap };

// Function to query API
export function queryAPI(endpoint) {
  // Get the count for the current endpoint from the weakMap
  let count = weakMap.get(endpoint) || 0;

  // Increment the count
  count++;

  // Update the count for the endpoint in the weakMap
  weakMap.set(endpoint, count);

  // Check if the count exceeds or equals 5
  if (count >= 5) {
    throw new Error("Endpoint load is high.");
  }

  // Perform the API query
  // ...
  // Rest of the code for querying the API
}