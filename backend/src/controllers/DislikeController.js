const Dev = require('../model/Dev')

module.exports = {
  async store(req, res) {
    const { devId } = req.params
    const { user } = req.headers

    const loggedDev = await Dev.findById(user)
    const targetDev = await Dev.findById(devId)

    if (!targetDev) {
      console.log('User does not exist', devId)
      return res.status(400).json({ error: "Dev not exists" })
    }

    loggedDev.dislikes.push(targetDev._id)

    await loggedDev.save()
    console.log(`User ${targetDev.name} received dislike from ${loggedDev.name}`)
    return res.json({ ok: true })
  }
}
