export async function fetchActualGen() {
  try {
    const fetchdata = await fetch(
      "https://data.elexon.co.uk/bmrs/api/v1/datasets/FUELHH/stream?publishDateTimeFrom=2024-01-01T00%3A00%3A00Z&publishDateTimeTo=2024-01-31T00%3A00%3A00Z&fuelType=WIND",
    );
    return await fetchdata.json();
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    } else {
      console.log("fetching of data failed");
    }
  }
}
export async function fetchForeCastData() {
  try {
    const fetchdata = await fetch(
      "https://data.elexon.co.uk/bmrs/api/v1/datasets/WINDFOR/stream?publishDateTimeFrom=2024-01-01T00%3A00%3A00Z&publishDateTimeTo=2024-01-31T00%3A00%3A00Z",
    );
    return await fetchdata.json();
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    } else {
      console.log("fetching of genData failed");
    }
  }
}
