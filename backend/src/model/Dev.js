const { Schema, model } = require('mongoose')


const DevSchema = new Schema(
  {
    avatar: {
      required: true,
      type: String
    },
    bio: String,
    dislikes: [
      {
        ref: 'Dev',
        type: Schema.Types.ObjectId
      }
    ],
    likes: [
      {
        ref: 'Dev',
        type: Schema.Types.ObjectId
      }
    ],
    name: {
      required: true,
      type: String
    },
    user: {
      required: true,
      type: String
    }
  },
    {
      timestamps: true
    }
)

module.exports = model('Dev', DevSchema)
