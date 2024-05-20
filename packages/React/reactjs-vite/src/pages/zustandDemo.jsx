
import { create } from 'zustand';

// create 存在 三个参数 
// 第一个参数为函数  
// 第二个参数为 布尔值
// 若第二个参数不传 或者传 false 则调用修改状态的方法后得到的新状态将会create方法原来返回的值融合
//  第二个 值 传true 直接覆盖
const useStore = create(set => ({
    fruits:['apple','banana','orage'],
    addFruits:(fruit)=>{
        set(state=>({
            fruits:[...state.fruits,fruit]
        }))
    },
    count: 0,
    setCount: (num) => set({ count: num }),
    inc: () => set((state) => ({ count: state.count + 1 })),
  }));

function ZustandDemo(){
    const  { count,setCount,inc }  = useStore()
    return(
        <div>
            {count}
            <input onChange={(event)=> {
                setCount(Number(event.target.value))
            }}/>
            <button onClick={inc}>增加</button>
        </div>
    )
}

export default ZustandDemo