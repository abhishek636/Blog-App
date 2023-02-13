import React from "react";
import { Link, withRouter } from "react-router-dom";



class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef()
        this.state = {
            username: "",
            email: "",
            password: "",
            errors: "",
            isLoading: false,
            error: {
                username: "",
                email: "",
                password: ""
            }
        };
    }




    render() {
        let { username, email, password } = this.state.error;
        console.log(this.state.error)
        return (
            <div style={{ width: "40%" }} className="text-center container-1 pt-20 mt-20">
                <h1 className="text-4xl">Sign Up</h1>
                <div className="flex flex-col">
                    <Link to="signin" className="text-green-400">Have an account?</Link><br />
                    {
                        (username || email || password) ? <span
                          className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" >
                            {username || email || password} </span>
                            : ""
                    }
                </div>
                <form onSubmit={this.handelSubmit} className="flex flex-col">
                    <input ref={this.ref} name="username"
                        onChange={this.handelChange}
                        value={this.state.username}
                        className="m-20 p-25"
                        type="text" placeholder="Username"
                    />
                    <input name="email" value={this.state.email}
                        onChange={this.handelChange}
                        className="m-20 p-25"
                        type="email" placeholder="Email"
                    />
                    <input name="password" value={this.state.password}
                        onChange={this.handelChange}
                        className="m-20 p-25"
                        type="password" placeholder="Password"
                    />
                    <button disabled={this.state.isLoading}
                        className="m-20 p-25 block">
                        {
                            this.state.isLoading ? (
                                <div className="flex align-bottom">Loading...</div>
                            ) : "Sign Up"
                        }

                    </button>
                </form>
            </div>
        )
    }
}

export default withRouter(Signup);