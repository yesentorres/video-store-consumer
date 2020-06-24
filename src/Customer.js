import React from 'react';

const Customer = (props) => {

  const onSelectCustomer = () => {

    // send customer id back to the function making the API call & display 

    props.onClickCallback(props.name);
    
  }

  return (
    <div>
      <h3>{props.name}</h3>
      <ul>
        <li>Account Credit: {props.account_credit}</li>
        <li>Movies Checked Out: {props.movie_count}</li>
      </ul>
      <button onClick={onSelectCustomer}>Select Customer</button>
    </div>
  )
}
//TODO Customer?
// Customer.propTypes = {
//   id: PropTypes.number,
//   name: PropTypes.string,
//   account_credit: PropTypes.string,
//   movie_count: PropTypes.number,
//  onSelectCustomer: PropTypes.func.isRequired,
// };

export default Customer;