const Mycomponent = React.forwardRef((props,ref)=> <input ref={ref} />)


function MyForm (){
    let myRef = React.createRef();
    // this.myRef.current.focus()
    return (
        <Mycomponent ref={this.myRef}></Mycomponent>
    )
}