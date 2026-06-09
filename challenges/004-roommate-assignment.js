/*Given an array of people with their roommate group, assign hotel rooms.

Rules:
- People can only share a room with someone from the same group.
- Pair people in the order they appear within their group.
- A pair should be returned as "Name1 and Name2".
- If a person has no roommate, return only their name.

Example:

Input:
[
  { name: "Alice", group: "A" },
  { name: "Bob", group: "B" },
  { name: "Carol", group: "A" }
]

Output:
[
  "Alice and Carol",
  "Bob"
]*/

function getRoommates(people) {
    let groups = {};
    let result = [];

    // Put names into their groups
    for (let person of people) {
        if (!groups[person.group]) {
            groups[person.group] = [];
        }
        groups[person.group].push(person.name);
    }

    // Make room assignments
    for (let group in groups) {
        let names = groups[group];

        for (let i = 0; i < names.length; i += 2) {
            if (i + 1 < names.length) {
                result.push(names[i] + " and " + names[i + 1]);
            } else {
                result.push(names[i]);
            }
        }
    }

    return result;
}

/*
Concepts Used:
- Arrays
- Objects
- Grouping data
- Loops
- Array methods
- Conditional logic
- String concatenation
*/