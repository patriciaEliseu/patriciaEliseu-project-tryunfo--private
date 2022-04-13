import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form className="form">
        <label htmlFor="text">
          Nome:
          <input type="text" data-testid="name-input" />
        </label>
        <label htmlFor="textarea">
          Descrição:
          <input type="textarea" data-testid="description-input" />
        </label>
        <label htmlFor="number">
          Attr1
          <input type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="number">
          Attr2
          <input type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="number">
          Attr3
          <input type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="text">
          Imagem
          <input type="text" data-testid="image-input" />
        </label>
        <label htmlFor="select">
          Raridade
          <select type="select" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="shekbox">
          Super Trybe Trunfo
          <input type="shekbox" data-testid="trunfo-input" />
        </label>
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
