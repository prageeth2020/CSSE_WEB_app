import React, {Component} from 'react';
import $ from 'jquery';

class HeaderLine extends Component {

    render() {
        return (
            <div>
                    <div class="bg-primary p-2" id="page-content-wrapper">

                        <nav className="navbar navbar-expand-lg navbar-light bg-primary  text-white">
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
        );
    }
}

export default HeaderLine;