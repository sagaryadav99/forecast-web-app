export async function serverCall(
  startDate: Date,
  endDate: Date,
  horizon: number[],
) {
  const data = await fetch("http://localhost:3000/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ startDate, endDate, horizon }),
  });
  return await data.json();
}
