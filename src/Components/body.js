import React, {Component} from 'react';

class Body extends Component {
    render() {
        return (
            <div>
                <div className="row ">
                    <div className="col-sm-2  border-right bg-light border-secondary">

                        <li className="p-3 border-bottom d-flex justify-content-between align-items-center">Dashboard  <span className="badge badge-primary badge-pill">14</span></li>
                        <li className="p-3 border-bottom d-flex justify-content-between align-items-center">Dashboard  <span className="badge badge-primary badge-pill">14</span></li>
                        <li className="p-3 border-bottom d-flex justify-content-between align-items-center">Dashboard  <span className="badge badge-primary badge-pill">14</span></li>
                        <li className="p-3 border-bottom d-flex justify-content-between align-items-center">Dashboard  <span className="badge badge-primary badge-pill">14</span></li>
                        <li className="p-3 border-bottom d-flex justify-content-between align-items-center">Dashboard  <span className="badge badge-primary badge-pill">14</span></li>

                    </div>
                    <div className="col-sm-10 my-2">
                        <div className="card mx-2">
                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;