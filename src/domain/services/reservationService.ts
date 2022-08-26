import { CreatedAt } from '../models/createdAt';
import { ReservationId } from '../models/reservationId';
import { ScheduleId } from '../models/scheduleId';
import { TeamUserId } from '../models/teamUserId';
import { OrganizationRepository } from '../repositories/organization/organizationRepository';
import { ReservationRepository, CreateArgs } from '../repositories/reservation';

export const reservationService = (
  reservationRepo: ReservationRepository,
  organizationRepo: OrganizationRepository
) => {
  const fetchAllReservations = ({
    teamUser,
    schedules,
  }: {
    teamUser: TeamUserId;
    schedules: ScheduleId[];
  }) => {
    const { members } = organizationRepo.getOrganizationMember(teamUser);
    return reservationRepo.batchGetReservations(schedules, members);
  };

  const createReservation = ({
    scheduleId,
    ownerId,
    createdAt,
  }: {
    scheduleId: ScheduleId;
    ownerId: TeamUserId;
    createdAt: CreatedAt;
  }) => {
    const reservation: CreateArgs = {
      ownerId,
      scheduleId,
      createdAt,
    };
    return reservationRepo.createReservation(reservation);
  };

  const deleteReservation = ({
    scheduleId,
    ownerId,
  }: {
    scheduleId: ScheduleId;
    ownerId: TeamUserId;
  }) => {
    const response = reservationRepo.getReservationFromSchedule({
      scheduleId,
      ownerId,
    });
    if (!response.wasSuccess) {
      // error
      return false;
    }
    if (!response.doesExist) {
      // error
      return false;
    }
    const { id: reservationId } = response.reservation;
    if (!doesReservationExist({ reservationId })) {
      // error
      return false;
    }
    const deleteResponse = reservationRepo.deleteReservation(reservationId);
    if (!deleteResponse.wasSuccess) {
      // error
      return false;
    }
    return true;
  };

  const doesReservationExist = ({
    reservationId,
  }: {
    reservationId: ReservationId;
  }): boolean => {
    const response = reservationRepo.getReservation(reservationId);
    if (!response.wasSuccess) {
      // error
      return false;
    }
    return response.doesExist;
  };

  return {
    fetchAllReservations,
    createReservation,
    deleteReservation,
  };
};
