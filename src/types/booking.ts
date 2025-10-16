export interface BookingInfo {
  destinationId: string;
  startDate: string;
  endDate: string;
  adults: number;
  children: number;
  infants: number;
  name: string;
  email: string;
  phone: string;
  specialRequest?: string;
  hotelLevel?: number;
  roomType?: string;
  couponCode?: string;
}
