"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservationService = void 0;
const reservationService = (reservationRepo, organizationRepo) => {
    const fetchAllReservations = ({ teamUser, schedules, }) => {
        const { members } = organizationRepo.getOrganizationMember(teamUser);
        return reservationRepo.batchGetReservations(schedules, members);
    };
    const createReservation = ({ scheduleId, ownerId, createdAt, }) => {
        const reservation = {
            ownerId,
            scheduleId,
            createdAt,
        };
        return reservationRepo.createReservation(reservation);
    };
    const deleteReservation = ({ scheduleId, ownerId, }) => {
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
    const doesReservationExist = ({ reservationId, }) => {
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
exports.reservationService = reservationService;
