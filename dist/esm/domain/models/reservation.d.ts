import { CreatedAt } from './createdAt';
import { ReservationId } from './reservationId';
import { ScheduleId } from './scheduleId';
import { TeamUserId } from './teamUserId';
export declare type Reservation = {
    id: ReservationId;
    ownerId: TeamUserId;
    scheduleId: ScheduleId;
    createdAt: CreatedAt;
};
//# sourceMappingURL=reservation.d.ts.map