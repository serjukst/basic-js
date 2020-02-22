module.exports = function createDreamTeam(members) {

  if (Array.isArray(members)) {
    let nameDreamTeam = [];
    for(let i = 0; i < members.length; i++) {
      if (typeof members[i] === "string") {
        nameDreamTeam.push(members[i].trim().charAt(0).toUpperCase());
      }
    }

    return nameDreamTeam.sort().join('');

  } else return false;
};