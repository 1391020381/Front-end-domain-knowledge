
// 1. 单个泛型参数的函数

function identity<T>(arg:T):T{
    return arg;
}

// 2. 多个泛型参数的函数

function merge<U,V>(obj1:U,obj2:V):U & V {
    return { ... obj1,...obj2}
}

//  带有泛型约束的函数

function getProperty<T,K extends keyof T>(obj:T,key:K){
    return obj[key]
}

// 泛型函数类型

let myIdentity:<T>(arg:T) => T = identity

//  泛型接口函数

interface GenericIdentityFn<T>{
    (arg:T):T
}

let myIdentity2:GenericIdentityFn<number> = identity


// 类中使用泛型方法

class GenericNumber<T>{
    zeroValue:T;
    add:(x:T,y:T) => T
}