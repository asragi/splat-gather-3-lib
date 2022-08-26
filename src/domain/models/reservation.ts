import { CreatedAt } from './createdAt';
import { ReservationId } from './reservationId';
import { ScheduleId } from './scheduleId';
import { TeamUserId } from './teamUserId';

export type Reservation = {
  id: ReservationId;
  ownerId: TeamUserId;
  scheduleId: ScheduleId;
  createdAt: CreatedAt;
};
