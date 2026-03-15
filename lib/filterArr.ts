import { ActualDataType, ForeCastGenDataType } from "@/types/dataTypes";

export function filterArr(arr: ActualDataType[]) {
  return arr
    .map((val) => {
      return { startTime: val.startTime, generation: val.generation };
    })
    .reverse();
}
export function arrToMap(arr: ForeCastGenDataType[]) {
  const map = new Map<string, { startTime: string; generation: number }[]>();
  arr.forEach((val: ForeCastGenDataType) => {
    if (!map.get(val.startTime)) {
      map.set(val.startTime, [
        { startTime: val.publishTime, generation: val.generation },
      ]);
    } else {
      const temparr = map.get(val.startTime);
      if (!temparr) {
        return;
      }
      temparr.push({ startTime: val.publishTime, generation: val.generation });
      map.set(val.startTime, temparr);
    }
  });
  return map;
}

export function cutoffMap(
  map: Map<string, { startTime: string; generation: number }[]>,
  horizon: number,
) {
  const horizonInMs = horizon * 60 * 60 * 1000;
  const resultMap = new Map<string, number>();
  map.forEach((valarr, keystartTime) => {
    const cutoff = new Date(keystartTime).getTime() - horizonInMs;
    let bestTime = null;
    for (let i = 0; i < valarr.length; i++) {
      if (new Date(valarr[i].startTime).getTime() <= cutoff) {
        if (
          !bestTime ||
          new Date(bestTime.startTime).getTime() <
            new Date(valarr[i].startTime).getTime()
        ) {
          bestTime = valarr[i];
        }
      }
    }
    if (!bestTime) {
      return;
    }
    resultMap.set(keystartTime, bestTime.generation);
  });
  return resultMap;
}

export function combineArr(arr: ActualDataType[], map: Map<string, number>) {
  return arr
    .filter((val: ActualDataType) => {
      return map.has(val.startTime);
    })
    .map((val: ActualDataType) => {
      return {
        startTime: val.startTime,
        actualGen: val.generation,
        ForeCastGen: map.get(val.startTime),
      };
    });
}
