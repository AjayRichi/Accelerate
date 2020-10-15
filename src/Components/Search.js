import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Search.css'

import Countries from './Countries'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            suggestions: [],
            selected: "",
            submit: false,
            button: false,
            corona: "",
            
        }
    }

    handleChange = (e) => {
        const value = e.target.value
        let array = []
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            array = Countries.sort().filter(v => regex.test(v))
        }
        this.setState({ text: value, suggestions: array, submit: false, button: false })
    }

    selectedText(value) {
        this.setState({ text: value, suggestions: [], button: true })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const wiki = "https://en.wikipedia.org/wiki/"
        const corona = "https://www.worldometers.info/coronavirus/country/"
        const link = wiki.concat(this.state.text)
        const clink = corona.concat(this.state.text)
        this.setState({ submit: true, selected: link, suggestions: [], corona: clink })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h1 className="heading">Search Box</h1>
                    <form className="form form-inline" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input id="input" autoComplete="off" className="form-control" type="text" placeholder="Country Name" onChange={this.handleChange} value={this.state.text} ></input>
                            <button type="submit" className="btn btn-success" disabled={!this.state.button}>Submit</button>
                        </div>
                    </form>
                    {this.state.submit ?
                        <div className="submit">
                            Known More About {this.state.text}==&gt;<a href={this.state.selected} target="blank">Wikipedia</a><br />
                            {this.state.text} Covid-19 Updates ==&gt;<a href={this.state.corona} target="blank">Worldometer</a>
                        </div>
                        : ""}
                    <div>
                        <ul>
                            {this.state.suggestions.map((item, index) =>
                                (<li key={index} onClick={() => this.selectedText(item)}>{item}</li>))
                            }
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Search