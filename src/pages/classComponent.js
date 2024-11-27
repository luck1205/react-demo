import React, {Component} from "react";


export default class stateClass extends Component{

    constructor(props){
        super(props)
        this.state = {
            num:1,
            age:14
        }
    }


    render(){
        return (
        <div>
            {this.state.num}
            {this.state.age}
            {this.props.msg}
            <button onClick={()=> this.setState({num:3})}>改变num</button>
        </div>
            )
    }
}