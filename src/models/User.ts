import { Schema, model } from 'mongoose'

// 实例化数据模板
const UserSchema = new Schema({
  // 用户名
  name: {
    type: String,
    required: true
  },
  //   账号
  account: {
    type: String,
    required: true
  },
  // 密码
  password: {
    type: String,
    required: true
  },
  // 邮箱
  email: {
    type: String
  },
  // 时间
  date: {
    type: Date,
    default: Date.now
  },
  // 是否为管理员
  isAdmin: {
    type: Boolean
  }
})

const User = model('users', UserSchema)

export default User
