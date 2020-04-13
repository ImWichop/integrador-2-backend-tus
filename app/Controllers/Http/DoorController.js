'use strict'
const Door = use('App/Models/Door')
const AllDoor = use('App/Models/AllDoor')
class DoorController {
  async index ({ request, response }) {
    const doors = await Door.all()

    return response.ok(doors)
  }

  async store ({ request, response }) {
    const doorData = request.only(Door.store)
    const door = await Door.create(doorData)

    return response.created(door)
  }

  async show ({ response, params }) {
    const door = await Door.findOrFail(params.id)
    return response.ok(door)
  }

  async update ({ request, response, params }) {
    const door = await Door.findOrFail(params.id)
    const doorData = request.only(Door.update)
    door.merge(doorData)
    await door.save()

    await AllDoor.create({
      name: door.name,
      feed: door.feed,
      value: door.value
    })

    return response.ok(door)
  }
}

module.exports = DoorController
