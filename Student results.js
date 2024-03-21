// Define an array to store student results
let studentResults = [];

// Function to add a new student result
function addResult(name, score) {
  let result = {
    name: name,
    score: score
  };
  studentResults.push(result);
}

// Function to delete a student result by name
function deleteResult(name) {
  studentResults = studentResults.filter(result => result.name !== name);
}

// Function to update a student result by name
function updateResult(name, newScore) {
  studentResults.forEach(result => {
    if (result.name === name) {
      result.score = newScore;
    }
  });
}

// Function to display all student results
function displayResults() {
  studentResults.forEach(result => {
    console.log(`${result.name}: ${result.score}`);
  });
}

// Example usage
addResult("John", 85);
addResult("Emma", 92);
addResult("Daniel", 78);
displayResults();
console.log("-----");
updateResult("Emma", 95);
displayResults();
console.log("-----");
deleteResult("John");
displayResults();
