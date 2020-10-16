import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Dashboard from "./Dashboard";
import AllOrders from "./allOrders";
import Pending from "./pending";
import SignOut from "./SignOut";
import Complains from "./Complains";
import Login from "./login";
class Body extends Component {
    render() {
        return (
            <div className="">
                <Router>
                    <div className="row mx-1 height">
                        <div className="col-sm-2  bg-light  ">
                                <Link className="nav-link link border-bottom text-dark" to="/"> <li className="p-2  d-flex justify-content-between align-items-center">Dashboard  </li></Link>
                                <Link className="nav-link link border-bottom text-dark" to="/orders"> <li className="p-2 d-flex justify-content-between align-items-center">Orders </li></Link>
                                <Link className="nav-link link border-bottom text-dark" to="/Pending"> <li className="p-2  d-flex justify-content-between align-items-center">Pending Approvals  <span className="badge badge-danger badge-pill">1</span></li></Link>
                                <Link className="nav-link link border-bottom text-dark" to="/Complains"> <li className="p-2  d-flex justify-content-between align-items-center">Complains <span className="badge badge-danger badge-pill">1</span></li></Link>
                                <Link className="nav-link link border-bottom text-dark" to="/SignOut"> <li className="p-2  d-flex justify-content-between align-items-center">SignOut </li></Link>
                        </div>
                        <div className="col-sm-10 my-2 ">
                            <Route exact path="/dashboard" component={Dashboard} />
                            <Route exact path="/orders" component={AllOrders} />
                            <Route exact path="/Pending" component={Pending} />
                            <Route exact path="/Complains" component={Complains} />
                            <Route exact path="/SignOut" component={SignOut} />

                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Body;