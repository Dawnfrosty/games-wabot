const roles = {
  /*
  'Role Name': <Minimal Level To Obtain this Role>
  */
  'Beginner': 0,
  'Bronze': 10,
  'Elite': 20,
  'Gold': 30,
  'Platinum': 40,
  'Diamond': 50,
  'King': 60,
  'Master': 75,
  'Grand Master': 90,
  'Legend': 100
}

module.exports = {
  before(m) {
    let user = global.db.data.users[m.sender]
    let level = user.level
    let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([,minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
    user.role = role
    return true
  }
}
