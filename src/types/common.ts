/**
 * 通用响应结构
 */
export interface ApiResponse<T = any> {
  code: number
  message: string
  data: T
}

/**
 * 分页参数
 */
export interface PaginationParams {
  page: number
  pageSize: number
}

/**
 * 分页响应
 */
export interface PaginationResponse<T = any> {
  list: T[]
  total: number
  page: number
  pageSize: number
  hasMore: boolean
}

/**
 * 通用 ID 参数
 */
export interface IdParam {
  id: string
}

/**
 * 通用列表查询参数
 */
export interface ListQueryParams extends PaginationParams {
  keyword?: string
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}
