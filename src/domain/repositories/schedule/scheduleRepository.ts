import { Schedule } from '../../models/schedule';

export type ScheduleRepository = {
  getAllPlannedSchedule: () => Schedule[];
};
