// &  |

interface Name {
    name:string;
}

interface Age {
    age:number
}
// 需要同时具有 Name Age 接口定义的属性
type Person = Name & Age

let jack:Person = { name:'Jack',age:25}