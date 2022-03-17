interface childData {
  name: string;
  age: number;
}

export interface child {
  data: childData;
  id: string;
}

export interface userData {
  username: string;
  age: number;
  child: Array<child>;
}
