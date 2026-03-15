export async function fetchActualGen(startDate: string, endDate: string) {
  try {
    const fetchdata = await fetch(
      `https://data.elexon.co.uk/bmrs/api/v1/datasets/FUELHH/stream?publishDateTimeFrom=${encodeURIComponent(startDate)}&publishDateTimeTo=${encodeURIComponent(endDate)}&fuelType=WIND`,
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
export async function fetchForeCastData(startDate: string, endDate: string) {
  try {
    const fetchdata = await fetch(
      `https://data.elexon.co.uk/bmrs/api/v1/datasets/WINDFOR/stream?publishDateTimeFrom=${encodeURIComponent(startDate)}&publishDateTimeTo=${encodeURIComponent(endDate)}`,
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
