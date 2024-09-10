export interface FormType {
  FullName: string;
  Address: string;
  PhoneNumber: string;
  Description: string;
  Date: Date;
  ReminderDate: Date;
  PropertyPhoto?: File | null;
  PropertyOwnership: PropertyOwnership;
  ExteriorFields: ExteriorFieldsType;
  InteriorFields: InteriorFieldsType;
}
interface ExteriorFieldsType {
  Roof: boolean;
  BrickWall: boolean;
  Floor: boolean;
  Eaves: boolean;
  Facia: boolean;
  Render: boolean;
  Gutter: boolean;
}
interface InteriorFieldsType {
  Wall: boolean;
  Timberwork: boolean;
  Shower: boolean;
  Room: boolean;
}
export enum PropertyOwnership{
  RENTAL = "rental",
  OWNER = "owner"
}
