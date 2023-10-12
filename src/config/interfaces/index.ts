export interface PayloadItem {
  id: string;
  content: string;
}

export interface PropsColumn {
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDrop: (e: React.DragEvent, name: string) => void;
  handleDragStart: (e: React.DragEvent, item: any, name: string) => void;
  name: string;
  classes: string;
  data: PayloadItem[];
}

export interface DataCardOrigin {
  name: string;
  classes: string;
  data: PayloadItem[];
}

export interface GlobalSlice {
  dataCards: DataCardOrigin[];
}

export interface PropsAddNewTask {
  name: string;
}
