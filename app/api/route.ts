import { fetchActualGen, fetchForeCastData } from "@/lib/fetchData";
import { arrToMap, combineArr, cutoffMap, filterArr } from "@/lib/filterArr";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { startDate, endDate, horizon } = body;
  console.log(typeof startDate);
  console.log(typeof endDate);
  let actualGenData = await fetchActualGen(startDate, endDate);
  actualGenData = filterArr(actualGenData);
  let foreCastGenData = await fetchForeCastData(startDate, endDate);
  foreCastGenData = arrToMap(foreCastGenData);
  foreCastGenData = cutoffMap(foreCastGenData, horizon);
  const finalarr = combineArr(actualGenData, foreCastGenData);
  return NextResponse.json(finalarr);
}
