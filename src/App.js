import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Deck from './components/Deck';

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
      isSaveButtonDisabled: true,
      baralho: [],
      baralhoFiltrado: [],
      pesquisa: '',
      trunfo: false,
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    // console.log('nome', name);
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // console.log('valor', target.value);
    this.setState({ [name]: value }, () => {
      const validar = !this.verificarInputPreenche();
      // console.log('sou eu', validar);
      this.setState({ isSaveButtonDisabled: validar });
    });
    // console.log(this.state);
  }
  /* criar carta e salvar ao baralho
   adicionar a carta ao baralho */

  onSaveButtonClick() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.state;
    const novaCarta = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    // console.log(baralho);
    this.setState((prevState) => ({
      baralho: [...prevState.baralho, novaCarta],
    }), () => {
      const { baralho } = this.state;
      this.setState({ baralhoFiltrado: baralho });
    });
    // console.log(baralho);
    /*  este param prevState está buscando o estado antes de ser alterado pela setState. */
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  }

  deletedButton = (e) => {
    const { baralho } = this.state;
    const newDeck = baralho.filter((carta) => carta.cardName !== e);
    this.setState({ baralho: newDeck });
  }

  changePesquisa = (e) => {
    this.setState({ pesquisa: e.target.value }, () => {
      const { baralho, pesquisa } = this.state;
      const baralhoFiltrado = baralho.filter((carta) => (
        carta.cardName.includes(pesquisa)));
      this.setState({ baralhoFiltrado });
    });
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
      cardRare, cardTrunfo, baralho,
      isSaveButtonDisabled, baralhoFiltrado, pesquisaSuperTrunfo, pesquisa,
      trunfo } = this.state;

    let baralhoRenderizado = [];
    if (trunfo === true) {
      baralhoRenderizado = baralho.filter((carta) => carta.cardTrunfo === true);
    } else if (pesquisa.length === 0) {
      baralhoRenderizado = baralho;
    } else {
      baralhoRenderizado = baralhoFiltrado;
    }
    return (
      <>
        <div>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ baralho.some((carta) => carta.cardTrunfo === true) }
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
          <label htmlFor="text">
            Filtro de buscando
            <input
              type="text"
              data-testid="name-filter"
              onChange={ this.changePesquisa }
            />
          </label>
          <label htmlFor="checkbox">
            Super Trunfo
            <input
              name="trunfo"
              type="checkbox"
              data-testid="trunfo-filter"
              checked={ pesquisaSuperTrunfo }
              onChange={ this.onInputChange }
            />
          </label>

        </div>
        <div className="Deck">
          {baralhoRenderizado.map((carta, index) => (
            <Deck
              cardName={ carta.cardName }
              cardDescription={ carta.cardDescription }
              cardAttr1={ carta.cardAttr1 }
              cardAttr2={ carta.cardAttr2 }
              cardAttr3={ carta.cardAttr3 }
              cardImage={ carta.cardImage }
              cardRare={ carta.cardRare }
              cardTrunfo={ carta.cardTrunfo }
              deletedButton={ this.deletedButton }
              key={ index }
            />
          ))}

        </div>

      </>
    );
  }
}

export default App;
