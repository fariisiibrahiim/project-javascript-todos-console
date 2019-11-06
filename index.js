const todos = ["Write the letter", "Eat some lunch", "run around the city"];
const breakSpace = "\n \n";

console.log("ShowTodos:");
const showTodos = data => {
  for (let i = 0; i < data.length; i++) {
    const item = data[i];

    console.log(`[${i + 1}]${item}`);
  }
};

showTodos(todos);

const searchTodos = (data, textToSearch) => {
  let newTodos = [];

  for (let i = 0; i < data.length; i++) {
    const item = data[i];

    const lowerCasedItem = item.toLowerCase();
    const lowerCasedText = textToSearch.toLowerCase();

    if (lowerCasedItem.includes(lowerCasedText)) {
      newTodos.push(item);
    }
  }
  return newTodos;
};

let foundTodos = searchTodos(todos, "run");

console.log(breakSpace, "Search Todos: RUN");

showTodos(foundTodos);

console.log(breakSpace, "Search Todos: THE");

foundTodos = searchTodos(todos, "the");
showTodos(foundTodos);
