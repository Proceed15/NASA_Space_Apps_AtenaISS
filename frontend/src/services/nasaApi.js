export async function getISSLocation() {
  const response = await fetch('http://api.open-notify.org/iss-now.json');
  const data = await response.json();
  return data.iss_position;
}

export async function searchImages(query) {
  const response = await fetch(`https://images-api.nasa.gov/search?q=${query}`);
  const data = await response.json();
  return data.collection.items;
}