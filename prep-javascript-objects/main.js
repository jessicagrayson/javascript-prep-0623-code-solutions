const person = {
  firstName: 'Jessica',
  lastName: 'Grayson',
  hobby: 'Bass',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log(fullName);

person.job = 'Unemployed';
console.log(person.job);

person['previousJob'] = 'Private Investigator';
console.log(person.previousJob);
console.log(person);
