import React from "react";

export interface IContainerProps {
    visible: boolean;
    controller: () => void;
}

// 对于组件的props类型 我们可以就像在函数中标注参数类型一样
// 属性默认值(defaultProps) 也可以通过参数默认值的形式非常自然地进行声明。
//  函数被推到为 () => JSX.Element
export const Container = ({ visible = false, controller = () => {}}:IContainerProps):JSX.Element =>{
    // const { visible, controller } = props
    console.log('controller:',controller)
    return <p>{visible}justdoit</p>
}

// FC 是 FunctionComponent的缩写   
// FC同样被作为一个类型导出 其使用方式是一致的,接受的唯一泛型参数即为这个组件的属性类型
export const Container1:React.FC<IContainerProps> = ({ visible = false, controller = () => {}}:IContainerProps):JSX.Element =>{
    // const { visible, controller } = props
    console.log('controller:',controller)
    return <p>{visible}justdoit</p>
}


// interface FunctionComponent<P = {}> {
//     (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
//     propTypes?: WeakValidationMap<P> | undefined;
//     contextTypes?: ValidationMap<any> | undefined;
//     defaultProps?: Partial<P> | undefined;
//     displayName?: string | undefined;
//   }
// type PropsWithChildren<P> = P & { children?: ReactNode | undefined };

//  没有消费 props.children   因此在更严格的场景下其实其实不推荐使用FC

// 使用简单函数和使用FC的重要差异之一就在于 使用FC时再无法使用组件类型。
// 组件泛型即指 为你的组件属性再次添加一个泛型 

