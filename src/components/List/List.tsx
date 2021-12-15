interface ArrayOfNumbers {
  id: number
  name: string
}

const array: ArrayOfNumbers[] = [];

for (let i = 0; i < 10; i++) {
  array.push({id: i, name: i.toString()});
}

console.log('ArrayOfNumbers created');

export const List: React.FC = () => {
  const listItems = array.map((el) => <li key={el.id}>{el.name}</li>)


  return (
    <ul>
      {listItems}
    </ul>
  )
}