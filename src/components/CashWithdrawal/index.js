import {Component} from 'react'

import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onClickDeleteAmount = id => {
    const {amount} = this.state
    const {denominationsList} = this.props

    const reducedAmount = denominationsList[id - 1].value

    if (amount - reducedAmount >= 0) {
      this.setState(prevState => ({amount: prevState.amount - reducedAmount}))
    }
  }

  render() {
    const {denominationsList} = this.props

    const {amount} = this.state
    const name = 'Sarah Williams'
    const initialLetter = name.slice(0, 1)
    return (
      <div className="app-container">
        <div className="cash-withdrawal-container">
          <div className="name-container">
            <div className="initial-container">
              <p className="initial">{initialLetter}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="your-balance-container">
            <p className="your-balance">Your Balance</p>
            <div>
              <p className="amount">{amount}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>

          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>

          <ul className="ul-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                item={eachItem}
                key={eachItem.id}
                onClickDeleteAmount={this.onClickDeleteAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
