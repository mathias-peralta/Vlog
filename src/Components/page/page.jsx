import React, { Component } from 'react';
import 'firebase/firebase-firestore';
import firebase from 'firebase';
import '../page/page.css'
class Page extends Component {
    state = {
        content: []
    }
    async componentDidMount() {
        const database = firebase.firestore();
        await database.collection('Page').doc(this.props.match.params.id).onSnapshot( page => {
            this.setState({
                content: page.data()
            })
        })
    }
    render() {
        console.log(this.state.content);
        return(
            <div>
                <img src={this.state.content.imagen} className="w-100 img-responsive" alt=""/>
                <div className="container">
                    <h1 className="pageTitle mt-3">{this.state.content.titulo}</h1>
                    <p className="pageContent mt-3">{this.state.content.contenido}</p>
                </div>
            </div>
        )
    }
}

export default Page;