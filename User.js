import mongoose from "mongoose";

const User = new mongoose.Schema({
  image: {type: String, required: true},
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
  // id: {type: string, required: true},
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  active: {type: Boolean, required: true},
  isOnline: {type: Boolean, required: true},
  search: { type: Object, required: false },
  lastMsgTime: { type: Number, required: true },
  messages: { type: Array, required: false },
  //   {
  //     key: 1,
  //     type: "",
  //     msg: "Hi, How are you?",
  //     time: "10:25 AM",
  //     date: {
  //       date: 24,
  //       month: "Aug",
  //       monthNum: 8,
  //       year: 2021,
  //     },
  //   },
  //   {
  //     key: 2,
  //     type: "other",
  //     msg: "I am fine.",
  //     time: "10:26 AM",
  //     date: {
  //       date: 25,
  //       month: "Aug",
  //       monthNum: 8,
  //       year: 2021,
  //     },
  //   },
  //   {
  //     key: 3,
  //     type: "other",
  //     msg: "What about you?",
  //     time: "10:27 AM",
  //     date: {
  //       date: 26,
  //       month: "Aug",
  //       monthNum: 8,
  //       year: 2021,
  //     },
  //   },
  //   {
  //     key: 4,
  //     type: "",
  //     msg: "Awesome these days.",
  //     time: "10:28 AM",
  //     date: {
  //       date: 27,
  //       month: "Aug",
  //       monthNum: 8,
  //       year: 2021,
  //     },
  //   },
  // ],
});

export default mongoose.model("Post", User);
