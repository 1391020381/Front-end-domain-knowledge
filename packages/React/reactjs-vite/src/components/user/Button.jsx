// import { useNode } from '@craftjs/core'
import { Button as AntdButton  } from 'antd'

export const Button = ({text,count,fuc})=>{
    console.log('Button:',text,count,fuc)
    return (
        <AntdButton type="primary" onClick={fuc}>{text}{count}</AntdButton>
    )
}