import { GeoPoint } from 'firebase/firestore';

export class Appointment {
  id: string = '';
  additional_information: String = '';
  appointment_time: string = '';
  date: string = '';
  email_carrier: string = '';
  final_position: GeoPoint = new GeoPoint(0, 0);
  folio: String = '';
  incidents: Object = [];
  order_number: string = '';
  phase: Object = [];
  status: boolean = false;
  vendor: string = '';
}
