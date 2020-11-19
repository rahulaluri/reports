import React from 'react'

export const Home = () => {
    return (
        <div className=' bg-light'>
            <nav className=" container navbar navbar-expand-lg navbar-light">
            <div className='row col-12 justify-content-around'>
                <div className='col-4 text-left'>
                    <a className="navbar-brand" href="#">Powered by People </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className='col-4 offset-md-4 text-right my-2 my-lg-0'>
                    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link mr-3" href="#">Reports <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Purchase Orders</a>
                            </li>
                        </ul>
                    </div>
                {/* </div> */}
            </div>
        </nav>
        </div>
    )
}