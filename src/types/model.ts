import { tuple } from '../utils/types'

// 基础的数据类型
const DataTypes = tuple('string', 'number', 'boolean', 'null', 'undefined', 'symbol', 'bigInt')

export type DataType = (typeof DataTypes)[number]

export type Config = {
  // 数据类型
  type: DataType
  // 是否为私有key
  primaryKey: boolean
  // 是否为自增
  autoIncrement?: boolean
  //
  comment: string
}
