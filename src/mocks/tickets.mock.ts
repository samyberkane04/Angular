import { Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'Sl in Algeria',
    description: '',
    date: dateToday,
    student: 'Samy',
    major:'oui'
  },
  {
    title: 'SI5 in Berlin',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Hacenia',
    major:'non'

  },
];
