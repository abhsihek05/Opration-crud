import React from "react";


export default class NewFile extends  React.Component{
    constructor(props){
        super(props)
        
    }

    render(){
        let a = "hello";
        let b = "world";

        let c = 20;
        let d = 30;



        return(
            <>
            <h1>{`${a} ${b}`}</h1>
            <h3>{`${c} + ${d} =  ${c+d}`}</h3>
            </>
        )
    }

}

