import React from "react";

class AmountBtns extends React.Component {
  render() {
    const { changeAmount, texts, amount } = this.props;

    return (
      <ul className="change-amount" style={{ padding: 0 }}>
        <li className="col-1-4">
          <a href="#" className={amount == 10 ? 'active' : ''} onClick={changeAmount.bind(null, 10)}>$10</a>
        </li>
        <li className="col-1-4">
          <a href="#" className={amount == 30 ? 'active' : ''} onClick={changeAmount.bind(null, 30)}>$30</a>
        </li>
        <li className="col-1-4">
          <a href="#" className={amount == 50 ? 'active' : ''} onClick={changeAmount.bind(null, 50)}>$50</a>
        </li>
        <li className="col-1-4">
          <a href="#" className={amount == 100 ? 'active' : ''} onClick={changeAmount.bind(null, 100)}>$100</a>
        </li>
        <li className="col-1-4">
          <a href="#" onClick={changeAmount.bind(null, 5)}>{texts.other}</a>
        </li>
      </ul>
    );
  }
}

export default AmountBtns;
