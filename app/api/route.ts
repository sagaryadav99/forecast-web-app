import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { foreCastHorizon } = body;
  console.log(foreCastHorizon);
  const fetchdata = await fetch(
    "https://data.elexon.co.uk/bmrs/api/v1/datasets/FUELHH/stream?publishDateTimeFrom=2024-01-01T00%3A00%3A00Z&publishDateTimeTo=2024-01-31T00%3A00%3A00Z&fuelType=WIND",
  );
  const data = await fetchdata.json();
  console.log(data);
  return NextResponse.json(data);
}
