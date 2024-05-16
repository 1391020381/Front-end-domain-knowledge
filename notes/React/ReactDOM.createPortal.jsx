// 通过 ReactDOM.createPortal 来挂载对应的内容显示的内容，这个方式可以直接将 React的组件进行挂载显示
// 具体来说,可以将 iframe的 contentWindow.document.body作为渲染目标来渲染React的组件。

// 通过 iframe绑定 ref 从而获取 iframe实体的body，这个body就是 cratePortal需要挂载的节点,调用 createPortal(children,mountNode)方法,此时就会将 FrameRender组件的children渲染到iframe当中去
// 这样做的好处就是无需新创建一个route来专门的作为显示的内容,纯粹当做沙盒来使用。

// FrameRender组件创建好后,就可以用它来包裹hygiene编辑器画布的内容
// Frame 组件是要显示的一个内容,通过 ReactDOM.createPortal成功的将它挂载到了 iframe的body中进行渲染显示

<FrameRender>
    <Frame/>
</FrameRender>



import * as React from 'react'
import { css } from '@emotion/css'
import { createPortal } from 'react-dom'

// export interface FrameRenderProps {
//   children?: React.ReactNode
// }

export const FrameRender = ({ children, ...props }) => {

  const ref = React.useRef(null)

  const mountNode =
    ref?.current?.contentWindow?.document.body

  return (
    <iframe {...props} ref={ref} width="100%" height="100%" className={css({
      border: 'none'
    })} >
      {mountNode ? createPortal(children, mountNode) : null}
    </iframe>
  )
}
