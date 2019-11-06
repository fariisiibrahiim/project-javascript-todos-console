const myTodos = [
  {
    id: 1,
    text: "Write the letter",
    tags: ["important", "writing"],
    favorite: true,
    completed: true
  },
  {
    id: 2,
    text: "Eat some lunch",
    tags: ["food"],
    completed: false,
    favorite: true
  },
  {
    id: 3,
    text: "Run around the city",
    favorite: false,
    completed: true
  }
];

const showTodos = data => {
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    let itemString = ``;

    itemString += item.completed ? `☑` : `x`;
    itemString += ` ${item.text} `; // Example: The todo text
    itemString += item.favorite ? `★` : `x`; // Example: ★

    console.log(itemString);
  }
};
showTodos(myTodos);

const searchTodosText = (data, searchText) => {
  let newTodos = [];

  for (let i = 0; i < data.length; i++) {
    const item = data[i];

    const lowerCasedItemText = item.text.toLowerCase();
    const lowerCasedSearchText = searchText.toLowerCase();

    if (lowerCasedItemText.includes(lowerCasedSearchText)) {
      newTodos.push(item);
    }
  }
  return newTodos;
};

console.log("\n Searching :The");
let foundTodos = searchTodosText(myTodos, "the");

showTodos(foundTodos);

console.log("\n Searching :some");
foundTodos = searchTodosText(myTodos, "some");

showTodos(foundTodos);
