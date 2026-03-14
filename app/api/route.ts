import { fetchActualGen, fetchForeCastData } from "@/lib/fetchData";
import { arrToMap, filterArr } from "@/lib/filterArr";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { foreCastHorizon } = body;
  let actualGenData = await fetchActualGen();
  let foreCastGenData = await fetchForeCastData();
  actualGenData = filterArr(actualGenData);
  foreCastGenData = arrToMap(foreCastGenData);
  console.log(actualGenData);
  console.log(foreCastGenData);
  return NextResponse.json(foreCastHorizon);
}
