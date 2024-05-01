function sortByHeight(names, heights) {
  const people = names.map((name, index) => ({ name, height: heights[index] }));

  console.log(people);

  people.sort((a, b) => b.height - a.height);
  console.log(people);

  return people.map((person) => person.name);
}

// Example usage:
const names = ["Mary", "John", "Emma"];
const heights = [180, 165, 170];
console.log(sortByHeight(names, heights)); // Output: ["Mary", "Emma", "John"]
