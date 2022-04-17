import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.verificarInputPreenche = this.verificarInputPreenche.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      /* hasTrunfo: false, */
      isSaveButtonDisabled: true,
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      const validar = !this.verificarInputPreenche();
      // console.log('sou eu', validar);
      this.setState({ isSaveButtonDisabled: validar });
    });
    // console.log(this.state);
  }

  onSaveButtonClick() {
    // console.log(this);
  }

  verificarInputPreenche() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare } = this.state;
    const maiorNum = 90;
    const total = 210;
    return cardName.length > 0 && cardDescription.length > 0 /* && cardAttr1.length > 0 */
    /*  && cardAttr2.length > 0 && cardAttr3.length > 0 */ && cardImage.length > 0
       && cardRare.length > 0 && (Number(cardAttr1) >= 0 && Number(cardAttr1) <= maiorNum)
       && (Number(cardAttr2) >= 0 && Number(cardAttr2) <= maiorNum)
       && (Number(cardAttr3) >= 0 && Number(cardAttr3) <= maiorNum)
       && (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= total);
  }

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo,
      isSaveButtonDisabled } = this.state;
    return (
      <form>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          // hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </form>
    );
  }
}

export default App;
