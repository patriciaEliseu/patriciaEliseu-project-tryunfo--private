import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <div className="cartas">
        <h1 data-testid="name-card">{ cardName }</h1>
        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
          value={ cardImage }
        />
        <h2
          data-testid="description-card"
        >
          { cardDescription }
        </h2>
        <p data-testid="attr1-card">{ cardAttr1 }</p>
        <p data-testid="attr2-card">{ cardAttr2 }</p>
        <p data-testid="attr3-card">{ cardAttr3 }</p>
        <p data-testid="rare-card">{ cardRare }</p>
        {/* <h2 data-testid="trunfo-card" value={ cardTrunfo }>Super Trunfo</h2> */}
        {/* exemplo de renderização condicional */}
        {/* { array.length > 0 && <p>Array não vazio!</p> } */}
        { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p> }
      </div>
    );
  }
}
Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
export default Card;
