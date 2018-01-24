import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chirpMessage: ''
        }
    }
    handleInput(value) {
        this.setState({ chirpMessage: value })
    }
    handleSubmit(event) {
        event.preventDefault();
        if (event === "") {
            return;
        }
        this.props.handleValue(this.state.chirpMessage)
    }
    render() {
        return (
            <form onSubmit={(event) => { this.handleSubmit(event) }}>
                <div className="form-group">
                    <input className="form-control"
                        placeholder="Chirp Away!"
                        onChange={(event) => { this.handleInput(event.target.value) }}
                    />
                </div>
                <div className="form-group mx-auto">
                    <button className="btn btn-primary" type="submit">Post Chirp</button>
                </div>
            </form>
        )
    }
}

export default Form;