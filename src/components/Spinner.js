import React, { Component } from 'react';
import '../App.css'

import loading from './__Iphone-spinner-1.gif'

class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={loading} alt="sorry" />
            </div>

        );
    }
}

export default Spinner;