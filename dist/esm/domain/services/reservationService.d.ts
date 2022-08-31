import { CreatedAt } from '../models/createdAt';
import { ScheduleId } from '../models/scheduleId';
import { TeamUserId } from '../models/teamUserId';
import { OrganizationRepository } from '../repositories/organization/organizationRepository';
import { ReservationRepository } from '../repositories/reservation';
export declare const reservationService: (reservationRepo: ReservationRepository, organizationRepo: OrganizationRepository) => {
    fetchAllReservations: ({ teamUser, schedules, }: {
        teamUser: TeamUserId;
        schedules: ScheduleId[];
    }) => import("../repositories/reservation/batchGetReservationsResult").BatchGetReservationsResult;
    createReservation: ({ scheduleId, ownerId, createdAt, }: {
        scheduleId: ScheduleId;
        ownerId: TeamUserId;
        createdAt: CreatedAt;
    }) => {
        isSuccess: boolean;
    };
    deleteReservation: ({ scheduleId, ownerId, }: {
        scheduleId: ScheduleId;
        ownerId: TeamUserId;
    }) => boolean;
};
//# sourceMappingURL=reservationService.d.ts.map