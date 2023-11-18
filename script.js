const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    const developers = data.filter(person => person.profession === 'developer');
  console.log('Developers:', developers);

  }
  
  // 2. Add Data
  function addData() {
       const name = prompt('Enter name:');
  const age = parseInt(prompt('Enter age:'));
  const profession = prompt('Enter profession:');
  const newData = { name, age, profession };
  data.push(newData);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    const filteredPeople = data.filter(person => person.profession !== 'admin');
    console.log('People without admins:', filteredPeople);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const dummyArray = [{ name: "Dummy", age: 25, profession: "tester" }];
  const combinedArray = data.concat(dummyArray);
  console.log('Combined Array:', combinedArray);
  }
  

  // 5. Average Age
  function averageAge() {
    const totalAge = data.reduce((sum, person) => sum + person.age, 0);
    const average = totalAge / data.length;
    console.log('Average Age:', average);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    const isAbove25 = data.some(person => person.age > 25);
  console.log('Is there anyone above 25?', isAbove25);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const professions = [...new Set(data.map(person => person.profession))];
    console.log('Unique Professions:', professions);
  
  }
  
  // 8. Sort by Age
  function sortByAge() {
    const sortedArray = data.slice().sort((a, b) => a.age - b.age);
    console.log('Sorted Array by Age:', sortedArray);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    const johnIndex = data.findIndex(person => person.name === 'john');
  if (johnIndex >= 0) {
    data[johnIndex].profession = 'manager';
    console.log('John\'s profession updated to manager:', data[johnIndex]);
  } else {
    console.log('John not found in the array.');
  }
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    const developerCount = data.filter(person => person.profession === 'developer').length;
  
    const adminCount = data.filter(person => person.profession === 'admin').length;
    //const testerCount = data.filter(person => person.profession === 'tester').length;
  console.log('Total Developers:', developerCount);
  console.log('Total Admins:', adminCount);
  //console.log('Total Tester:', testerCount);

  }