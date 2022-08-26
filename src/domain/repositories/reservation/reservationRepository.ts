import { Reservation } from '../../models/reservation';
import { ReservationId } from '../../models/reservationId';
import { ScheduleId } from '../../models/scheduleId';
import { TeamUserId } from '../../models/teamUserId';
import { BatchGetReservationsResult } from './batchGetReservationsResult';
import { UpdateReservationResult } from './updateReservationResult';

export type CreateArgs = Omit<Reservation, ReservationId>;
type CreateResult = {
  isSuccess: boolean;
};

type GetResult = {
  wasSuccess: boolean;
  doesExist: boolean;
  reservation: Reservation;
};

type GetFromScheduleResult = {
  wasSuccess: boolean;
  doesExist: boolean;
  reservation: Reservation;
};

type DeleteResult = {
  wasSuccess: boolean;
};

export type ReservationRepository = {
  batchGetReservations: (
    schedules: ScheduleId[],
    teamUsers: TeamUserId[]
  ) => BatchGetReservationsResult;
  createReservation: (reservation: CreateArgs) => CreateResult;
  updateReservation: (newReservation: Reservation) => UpdateReservationResult;
  getReservation: (reservationId: ReservationId) => GetResult;
  getReservationFromSchedule: (args: {
    scheduleId: ScheduleId;
    ownerId: TeamUserId;
  }) => GetFromScheduleResult;
  deleteReservation: (reservationId: ReservationId) => DeleteResult;
};
