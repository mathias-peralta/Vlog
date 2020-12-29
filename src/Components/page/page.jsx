import React, { Component } from 'react';


class Page extends Component {
    render() {
        return(
            <p>This is the page component {this.props.match.params.id}</p>
        )
    }
}

export default Page;