import React, { Component } from 'react';
import Form from './Form';
import SingleChirp from './SingleChirp';

class ChirpsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chirpList: ["First Chirp ever", "Whats up", "Hello world!"]
        }
    }
    handleList(value) {
        let newChirpList = [...this.state.chirpList]
        newChirpList.push(value)
        this.setState({ chirpList: newChirpList })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 py-2 mx-auto">
                        <Form handleValue={(value) => { this.handleList(value) }} />
                    </div>
                    <SingleChirp list={this.state.chirpList} />
                </div>
            </div>
        )
    }
}

export default ChirpsList;