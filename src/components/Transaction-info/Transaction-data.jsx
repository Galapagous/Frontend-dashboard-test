import './transactionData.css'

function TransactionData(props) {
    const {icon, item, date, price} = props
  return (
    <div className="transaction-item">
        <div className="left-details">
            {icon}
            <div className="item-info">
                <h3>{item}</h3>
                <span>{date}</span>
            </div>
        </div>
        <div className="right-details">
            <h3>{price}</h3>
        </div>
    </div>
  )
}

export default TransactionData
