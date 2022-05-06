import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Deck.css';

class Deck extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      deletedButton,
    } = this.props;
    return (
      <div className="superDeck">
        <p>{ cardName }</p>
        <p>{ cardDescription }</p>
        <p>{ cardAttr1 }</p>
        <p>{ cardAttr2 }</p>
        <p>{ cardAttr3 }</p>
        <img src={ cardImage } alt={ cardName } />
        <p>{ cardRare }</p>
        <p>{ cardTrunfo }</p>
        {/* https://pt-br.reactjs.org/docs/handling-events.html */}
        <button
          name="baralho-delet"
          onClick={ () => deletedButton(cardName) }
          type="button"
          data-testid="delete-button"
        >
          Delete
        </button>
      </div>
    );
  }
}
Deck.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  deletedButton: PropTypes.func.isRequired,
};

export default Deck;
