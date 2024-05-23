const mongoose = require("mongoose");

const chatRoomSchema = new mongoose.Schema(
  {
    ID: {
      type: String,
      required: true,
    },
    userOne: {
      type: String,
      required: true,
    },
    userTwo: {
      type: String,
      required: true,
    },
    chats: [
      {
        sender: {
          type: String,
        },
        receiver: {
          type: String,
        },
        msgType: {
          type: String,
          enum: ["text", "img"],
        },
        isFlagged: {
          type: Boolean,
        },
        msg: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("ChatRoom", chatRoomSchema);