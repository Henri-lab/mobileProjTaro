/**
 * 客户统计
 */
export interface CustomerStats {
  totalOrders: number
  totalAmount: number
  averageAmount: number
}

/**
 * 客户信息
 */
export interface Customer {
  id: string
  name: string
  phone: string
  avatar?: string
  wechatId?: string

  // 标签
  tags: string[]

  // 分组
  groupId?: string

  // 统计信息
  stats: CustomerStats

  // 备注
  remark?: string

  createdAt: string
  updatedAt: string
  lastOrderAt?: string
}

/**
 * 客户分组
 */
export interface CustomerGroup {
  id: string
  name: string
  color: string
  customerCount: number
}
