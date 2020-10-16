import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="shadow-lg mb-5 bg-white rounded w-25 mx-auto  my-4">
                    <div className="bg-secondary">
                        <h1 className="text-center p-1"><i className="fas fa-user-circle"></i></h1>
                        <h1 className="text-center p-1">Log In</h1>
                    </div>
                    <h6>
                        <form className="mx-4 " method="POST">
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="username"/>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name="password"/>
                            </div>

                            <button type="submit" className="btn btn-primary my-2" name="login">Log In</button>
                        </form>

                    </h6>

                </div>
            </div>
        );
    }
}

export default Login;