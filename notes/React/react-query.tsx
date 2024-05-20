// @ts-nocheck
import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
  import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
  import React from 'react'
  
  // @tanstack/react-query
  // React的一个强大的库,用于处理异步数据获取 缓存 同步以及更新。
  // 它不仅能够帮助开发者高效地管理服务器状态(API获取的数据)
  // 还提供了数据缓存 后台更新 数据状态同步等高级功能
  // QueryClient 创建 react query 客户端实例   数据抓取 缓存 更新
  // QueryClientProvider 用于在react组件树中提供这个实例 
  // QueryClientProvider 组件接受一个属性children 表示组件的子组件
  // QueryClientProvider 使用 client 属性接受之前创建的 queryClient实例 这样 React Query 的功能就能在整个组件树中被使用
  // ReactQueryDevtools  react query提供了开发者工具 用于在开发过程中查看缓存数据 查询和突变。
  // ReactQueryDevtools  开发工具
  const queryClient = new QueryClient()
  
  
  export const ReactQeuryProvider: React.FC<{
    children: React.ReactNode;
  }> = (props) => {
    return (
      <QueryClientProvider client={queryClient}>
        {props.children}
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    )
  }