import { mongoURI } from '../config/key'
import mongoose from 'mongoose'

const connectMongodb = () => {
  // 链接数据库
  mongoose
    .connect(mongoURI,{dbName:"admin"})
    .then(() => {
      console.log('mongodb is connecting')
    })
    .catch((err) => {
      console.log(err)
    })
}


export default connectMongodb;
