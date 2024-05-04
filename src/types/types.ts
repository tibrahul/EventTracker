export interface IEvent {
  id: number;
  name: string;
  image: string;
  location: string;
  entry_type: string;
}

export enum DisplayType {
  List = 'list',
  Grid = 'grid',
}