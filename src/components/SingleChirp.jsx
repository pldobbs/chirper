import React, { Component } from 'react';

class SingleChirp extends Component {
    render() {
        let chirpList = this.props.list.map((chirp, index) => {
            return (
                <div className="card py-3" key={index}>
                    <h2 className="card-block">{chirp}</h2>
                </div>
            )
        });
        return (
            <div className="container">
                {chirpList}
            </div>
        )
    }
}

export default SingleChirp;