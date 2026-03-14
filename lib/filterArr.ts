import { ActualDataType, ForeCastGenDataType } from "@/types/dataTypes";

export function filterArr(arr: ActualDataType[]) {
  return arr.map((val) => {
    return { startTime: val.startTime, generation: val.generation };
  });
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
