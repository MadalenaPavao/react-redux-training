import * as ActionType from './action';
import { shuffle } from 'lodash';


const SIDE = 6
const SYMBOLS = ['😀', '🎉','💖','🎩','🐶','🐱','🦄','🐬','🌍','🌛','🌞','💫','🍎','🍌','🍓','🍐','🍟','🍿']

const generateCards = () => {
    let id = 0;
    const result = []
    const size = SIDE * SIDE
    const candidates = shuffle(SYMBOLS)
    while (result.length < size) {
        const card = candidates.pop()
        result.push({
            symbol: card,
            id: id++
        }, {
            symbol: card,
            id: id++
        })
    }
    const data = shuffle(result)
    return data
}

const initialState = {
    cardDeck: generateCards(),
    gameState: "ongoing",
    foundMatches: [], // Here I think we better keep track of the found symbols (so we also know which pairs are covered)
    nOfTrials: 0
}

const reducer = (currentState = initialState, action) => {

    switch (action.type) {
        case ActionType.MATCH_CARDS:
            const isMatch = (action.card1.symbol == action.card2.symbol) && (action.card1.id != action.card2.id) ? 1 : 0;
            return {
                ...currentState,
                nOfTrials: currentState.nOfTrials + 1,
                foundMatches: [
                    ...currentState.foundMatches,
                    ...(isMatch ? [action.card1.symbol] : [])
                ]
            }

    }

    return currentState;
}

export default reducer