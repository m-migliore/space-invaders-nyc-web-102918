class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    if (crew.length > 0) {
      this.docked = false
    } else {
      this.docked = true
    }
    this.phasersCharge = "uncharged"
    this.addCrewMembers()
  }

  addCrewMembers() {
    this.crew.forEach(crewMember => {
      crewMember.currentShip = this
    })
  }
}
