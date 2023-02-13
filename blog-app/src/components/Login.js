import React from "react";
import { Link } from "react-router-dom"





class Login extends React.Component {
    constructor(props) {
        super(props);
        this.email = React.createRef();
        this.password = React.createRef();
        this.state = {
            formErrors: [],
            errors: ""
        };
    }

    render() {
        const { formErrors } = this.state;
        console.log(this.props)
        return (
            <div style={{ width: "40%" }} className="text-center container-1 pt-20 mt-20" data-testid="mainDiv" >
                <h1 className="text-4xl my-2">Sign In</h1>
                <Link to="/signup" className="text-green-400 p-1">Need an account?</Link>
                {
                this.state.errors && Object.keys(this.state.errors).map((key, i) => (
                    <p key={i} className="mt-5 p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800">
                        {key}: {this.state.errors[key]}
                    </p>))
                }
                <form onSubmit={this.handleFormSubmit} className="flex flex-col" >
                    {formErrors.map(error => <p key={error}>{error}</p>)}
                    <input ref={this.email}
                        onBlur={this.handleBlur}
                        className="m-20 p-25"
                        type="text" placeholder="Email"
                    />
                    <input ref={this.password}
                        onBlur={(e) => this.handleBlur(e)}
                        className="m-20 p-25"
                        type="password" placeholder="Password"
                    />
                    <button className=" m-20 p-25 block"
                    //  disabled={formErrors.length >= 1} 
                    >
                         {/* {
                            this.state.isLoading ? (
                                <div className="flex align-bottom"> <Icon /> Loading...</div>
                         ) : */}
                        Sign in
                            {/* } */}
                    </button>
                </form>
            </div>
        )
    }
}

export default Login;