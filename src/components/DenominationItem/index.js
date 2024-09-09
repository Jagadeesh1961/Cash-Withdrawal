import './index.css'

const DenominationItem = props => {
  const {item, onClickDeleteAmount} = props
  const {value, id} = item

  const deleteAmount = () => {
    onClickDeleteAmount(id)
  }
  return (
    <li className="list-item">
      <button className="button" type="button" onClick={deleteAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
