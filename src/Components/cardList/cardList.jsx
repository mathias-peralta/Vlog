import React, { Component } from 'react';
import Card from '../card/card';
import firebase from 'firebase';
import 'firebase/firebase-firestore';

class CardList extends Component {
    state = {
        card: []
    }
    async componentDidMount () {
        const database = firebase.firestore();
        await database.collection('Cards').onSnapshot(snapshot => {
            this.setState({
                card: snapshot.docs.map(card => {
                    return({
                        card: card.data(),
                        id: card.id
                    })
                })

            })
        })
    }
    render() {
        return(
            this.state.card.map(card => {
                return(
                    <Card card = {card}/>
                )
            })
        )
    }
}

export default CardList;