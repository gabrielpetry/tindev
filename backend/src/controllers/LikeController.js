const Dev = require('../model/Dev')

module.exports = {
  async store(req, res) {
    const { devId } = req.params
    const { user } = req.headers

    if (!devId) {
      return res.json({ ok: false, msg: "no user" })
    }

    if (!user) {
      return res.json({ ok: false, msg: "no auth" })
    }

    const loggedDev = await Dev.findById(user)
    const targetDev = await Dev.findById(devId)

    if (!targetDev) {
      console.log('Dev not found')
      return res.status(400).json({ error: "Dev not exists" })
    }

    if (targetDev.likes.includes(user)) {
      const loggedSocket = req.connectUsers[user]
      const targetSocket = req.connectUsers[devId]

      if (loggedSocket) {
        req.io.to(loggedSocket).emit('match', targetDev)
      }

      if (targetSocket) {
        req.io.to(targetSocket).emit('match', loggedDev)
      }
    }

    loggedDev.likes.push(targetDev._id)

    await loggedDev.save()

    return res.json({ ok: true })
  }
}
