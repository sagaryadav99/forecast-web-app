import { FinalArrDataType } from "./dataTypes";

export type InputProp = {
  setStartDate: (a: Date) => void;
  setEndDate: (a: Date) => void;
  startDate: Date;
  endDate: Date;
  setHorizon: (a: number[]) => void;
  horizon: number[];
  setChartData: (a: FinalArrDataType[]) => void;
};
