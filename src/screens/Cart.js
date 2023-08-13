import React, { useState } from 'react'
import Delete from '@material-ui/icons/Delete'
import { useCart, useDispatchCart } from '../components/ContextReducer';
import { KeyboardReturn, RestorePageRounded } from '@material-ui/icons';
import { type } from '@testing-library/user-event/dist/type';
export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-80 text-center fs-3 bg-success'>The Cart is Empty!</div>
      </div>
    )
  }


  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    // console.log(data,localStorage.getItem("userEmail"),new Date())
    let response = await fetch("http://localhost:5000/api/auth/orderData", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });
    console.log("JSON RESPONSE:::::", response.status)
    if (response.status === 200) {
      // response.send(<div>
      //   <div className='m-5 w-80 text-center fs-3 bg-success'>Order Placed Successfully</div>
      // </div>)
      // data.length = 0;
      setOrderPlaced(true);
      // dispatch({ type: "DROP" })
      setTimeout(() => {
        dispatch({ type: "DROP" });
      }, 1000);
    }
  }

  let totalPrice = data.reduce((total, food) => total + food.price, 0)
  return (
    <div>

      {console.log(data)}
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md ' >
        <table className='table table-hover '>
          <thead className=' text-success fs-4'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Option</th>
              <th scope='col' >Amount</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody className='bg-warning'>
            {data.map((food, index) => (
              <tr>
                <th scope='row' >{index + 1}</th>
                <td >{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td ><button type="button" className="btn p-0"><Delete onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='fs-2 bg-warning'>Total Price: {totalPrice}/-</h1></div>
        <div>
          {orderPlaced ? (
            <div className="m-5 w-80 text-center fs-3 bg-success">Order Placed Successfully</div>
          ) : (
            <button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>)}
        </div>
      </div>
    </div>
  )
}
