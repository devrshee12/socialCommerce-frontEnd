import { Component } from "react";

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errorInfo){
        console.log("Logging:", error, errorInfo)
    }

    render(){
        console.log("hasError :" , this.state.hasError);
        if(this.state.hasError){
            return <h1 style={{height:"100vh", width:"100vw", background:"red"}}>Something Went Wrong</h1>
        }
        return this.props.children
        
    }
}


export default ErrorBoundary