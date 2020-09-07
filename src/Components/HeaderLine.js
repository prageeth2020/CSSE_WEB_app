import React, {Component} from 'react';
import $ from 'jquery';

class HeaderLine extends Component {
    componentDidMount() {
        $("#wrapper").toggleClass("toggled");
    }

    viewSideBar = (event) => {
        event.preventDefault();
        $("#wrapper").toggleClass("toggled");
    }

    render() {
        return (
            <div>
                <div className="d-flex" id="wrapper">


                    <div className="bg-light border-right" id="sidebar-wrapper">

                        <div className="list-group list-group-flush">
                            <a href="#" className="list-group-item list-group-item-action bg-light">Dashboard</a>
                            <a href="#" className="list-group-item list-group-item-action bg-light">Requisitions</a>
                            <a href="#" className="list-group-item list-group-item-action bg-light">Approvels</a>
                            <a href="#" className="list-group-item list-group-item-action bg-light">Inguire</a>
                            <a href="#" className="list-group-item list-group-item-action bg-light">Sign Out</a>
                        </div>
                    </div>

                    <div id="page-content-wrapper">

                        <nav className="navbar navbar-expand-lg navbar-light bg-primary border-bottom text-white">
                            <button className="btn btn-primary" id="menu-toggle" onClick={this.viewSideBar}><i className="fas fa-align-justify"></i></button>


                            <h5 style={{margin : "auto"}} className="mx-2"> Purchase </h5>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="ml-auto">

                                        <i className="fas fa-cog text-white mx-4 fa-lg"></i>

                                        <i className="far fa-bell text-white mx-4 fa-lg"></i>

                                        <i className="far fa-user ext-white mx-4 fa-lg"></i>


                                </div>
                            </div>
                        </nav>

                    </div>


                </div>
            </div>
        );
    }
}

export default HeaderLine;