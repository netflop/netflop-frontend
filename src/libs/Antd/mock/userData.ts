interface DataType {
  key?: React.Key;
  name?: string;
  age?: number;
  address?: string;
}

const dataSource: DataType[] = [];

for (let i = 0; i < 46; i++) {
  dataSource.push({
    key: `user-${i}`,
    name: `User ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  });
}


export { dataSource, type DataType };
