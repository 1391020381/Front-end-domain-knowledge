# Front-end-domain-knowledge
* 前端领域知识 
* pnpm monorepo 代码组织方式
* monorepo/
  - packages/
    - lowcode/
       - app1/
       - app2/
    - canvas/
       - app1/
       - app2/
* 在这个结构里，lowcode 和 canvas 是顶层的分类，每个分类下包含了相关的应用。这种组织方式可以帮助你更好地管理相关的依赖，并且可以使用 pnpm 的多包管理特性来高效地安装和更新依赖，或者运行脚本      

* packages:
  - 'packages/**/*/'
* 这表明任何 packages 目录下的任何层级的子目录都将被视为单独的包。
* 总的来说，pnpm 提供的灵活性足以支持各种嵌套和组织模式，以适应不同项目的需求。

* 根目录的 package.json  防止发布 统一脚本 共享依赖 工作区配置 版本管理 工具配置
