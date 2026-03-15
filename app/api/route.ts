import { fetchActualGen, fetchForeCastData } from "@/lib/fetchData";
import { arrToMap, combineArr, cutoffMap, filterArr } from "@/lib/filterArr";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { foreCastHorizon } = body;
  let actualGenData = await fetchActualGen();
  actualGenData = filterArr(actualGenData);
  let foreCastGenData = await fetchForeCastData();
  foreCastGenData = arrToMap(foreCastGenData);
  foreCastGenData = cutoffMap(foreCastGenData, foreCastHorizon);
  const finalarr = combineArr(actualGenData, foreCastGenData);
  return NextResponse.json(finalarr);
}
