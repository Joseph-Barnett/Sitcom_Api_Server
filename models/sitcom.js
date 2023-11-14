const sitcomsData = require('../data')

class Sitcom {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.seasons = data.seasons
    this.year = data.year
  }

  static getAll() {
    const sitcom = sitcomsData.map(v => new Sitcom(v))
    return sitcom
  }

  static findById(sitcomId) {
    try {
      const sitcomData = sitcomsData.find(v => v.id === sitcomId)
      const sitcoms = new Sitcom(sitcomData)
      return sitcoms
    } catch (error) {
      throw new Error('This sitcom does not exist!')
    }
  }

  static create(data) {
    if (!data.name) throw new Error('name is missing')

    try {
      let nextId
      sitcomsData.length
        ? nextId = sitcomsData.reduce((v1, v2) => v1.id > v2.id ? v1 : v2).id + 1
        : nextId = 1

      const newSitcom = new Sitcom({ id: nextId, name: data.name, seasons: data.seasons, year: data.year })
      sitcomsData.push(newSitcom)
      return newSitcom
    } catch (err) {
      throw new Error(err)
    }
  }



  update(data) {
    try {
      const sitcomsData = sitcomsData.find(sitcom => sitcom.id === this.id)

      if (!sitcomsData) {
        throw new Error('sitcom not found')
      }

      if (!data.name) {
        throw new Error('sitcom name missing')
      }

      sitcomsData.name = data.name
      return new Sitcom(sitcomsData)
    } catch (error) {
      throw new Error(err.message)
    }
  }

  destroy() {
    const sitcomData = sitcomsData.find(sitcom => sitcom.id === this.id)
    if (sitcomData) {
        const sitcomsIndex = sitcomsData.indexOf(sitcomData)
        sitcomsData.splice(sitcomsIndex,1)
    } else {
        throw new Error("sitcom not found")
    }
  }
  }




module.exports = Sitcom
