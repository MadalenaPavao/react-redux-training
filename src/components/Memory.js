import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import * as ActionType from '../store/action'
import './memory.css'

class Memory extends React.Component {
    state = {
        cardSelected: null,
        cardToMatch: null
    }
    VISUAL_PAUSE_MSECS = 750
    HIDDEN_SYMBOL = '❓'

    handleClick(card) {
        if(card.id == this.state.cardSelected?.id) {
            return;
        }
        if (this.state.cardSelected && !this.state.cardToMatch) {
            this.setState({
                cardToMatch: card
            });
            setTimeout(() => {
                this.props.onMatchCards(this.state.cardSelected, card);
                this.setState({
                    cardSelected: null,
                    cardToMatch: null,
                })
            }, this.VISUAL_PAUSE_MSECS)
        }
        if (!this.state.cardSelected) {
            this.setState({
                cardSelected: card
            });
        }
    }

    render() {
        return (
            <Fragment>
                <h1>Game</h1>
                <p>
                    <span>#clicks: </span><span>{this.props.nOfTrials}</span>
                </p>
                <p>
                    <span>#matches: </span><span>{this.props.foundMatches}</span>
                </p>
                <p>
                    <span>DEBUG this.state.cardSelected: </span><span>{this.state.cardSelected?.symbol} (#{this.state.cardSelected?.id})</span>
                </p>
                <p className="board">
                {this.props.cardDeck.map((card, i) => (
                    <span key={i} style={{ cursor: "pointer", opacity: this.props.foundMatches.indexOf(card) != -1 ? 0.2 : 1 }} onClick={() => this.handleClick(card)}>
                        {(this.state.cardSelected == card) || (this.state.cardToMatch == card) || (this.props.foundMatches.indexOf(card.symbol) != -1) ? card.symbol : this.HIDDEN_SYMBOL}
                    </span>
                ))}
                </p>
            </Fragment>
        )
    }
}

const mapsStateToProps = state => {
    return {
        nOfTrials: state.nOfTrials,
        foundMatches: state.foundMatches,
        cardDeck: state.cardDeck
    }
}

const mapsDispatchToProps = dispatch => {
    return {
        onMatchCards: (card1, card2) => dispatch({ type: ActionType.MATCH_CARDS, card1: card1, card2: card2 })
    }
}
export default connect(mapsStateToProps, mapsDispatchToProps)(Memory) 