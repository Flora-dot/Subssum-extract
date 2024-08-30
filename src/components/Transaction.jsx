import {transactions} from './transaction-data';

export const Transaction = () => {
    return(
        <table>
        <thead>
          <tr className=''>
            <th>Service</th>
            <th>Amount</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Payment Method</th>
            <th>Transaction No</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.service}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.totalAmount}</td>
              <td className={transaction.status.toLowerCase()}>{transaction.status}</td>
              <td>{transaction.paymentMethod}</td>
              <td>{transaction.transactionNo}</td>
              <td>
                <button>Open</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}