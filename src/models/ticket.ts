export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: string;
  major?: string;
  archived?: boolean;
}
enum major{
  ge = "GE",
  si = "SI",
};