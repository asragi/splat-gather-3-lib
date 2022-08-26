import { Reservation } from '../../models/reservation';

export type BatchGetReservationsResult = {
  isSuccess: boolean;
  reservations: Reservation[];
};
