import { connect } from 'mongoose';

export function initDB() {
  connect("mongodb://localhost:27017/kokokoko")
    .then(() => console.log("Connected to DB"))
    .catch(err => console.log(err));
}
