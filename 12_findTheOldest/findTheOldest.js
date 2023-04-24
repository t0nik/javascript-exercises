const findTheOldest = function(people) {
  const sorted = people.sort((a, b) => {
    const ageA = (a.yearOfDeath ? a.yearOfDeath : new Date().getFullYear()) - a.yearOfBirth;
    const ageB = (b.yearOfDeath ? b.yearOfDeath : new Date().getFullYear()) - b.yearOfBirth;
    return ageA > ageB ? -1 : 1;
  });
  // console.table(sorted);
  return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
