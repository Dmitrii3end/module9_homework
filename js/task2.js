console.log('Задание2 :');

const jsonString = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }
`;

const data = JSON.parse(jsonString);

console.log(data);

// result:
// {
//     list: [
//       { name: 'Petr', age: 20, prof: 'mechanic' },
//       { name: 'Vova', age: 60, prof: 'pilot' },
//     ]
//   }