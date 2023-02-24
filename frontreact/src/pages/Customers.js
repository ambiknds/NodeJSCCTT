import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import AddCustomer from '../components/AddCustomer';
import { baseUrl } from '../shared';
function Customers() {
  const [customers, setCustomers] = useState();
  useEffect(() => {
    // console.log('Fetching...')
    const url = baseUrl + 'api/customers/'
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setCustomers(data.customers);
    })
  }, [])
  function newCustomer(name, industry){
    const data = {name: name, industry: industry}
    const url = baseUrl + 'api/customers'
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data) 
    }).then((response) =>{
      if(!response.ok){
        throw new Error('Something went Wrong')
      }
    }).then((data)=> {
      //assume the add was successful
      //hide the modal
      //mak sure thatlist is updated appropriately.
    }).catch((e)=> {
      console.log(e)
    })  }

  return (
    <div className='flex flex-col justify-items-center content-center'>
      <h1>Here are our Customers:</h1>
      <ul>
      {customers ?
        customers.map((customer) => {
        return (
          
            <li className='m-2' key={customer._id}>
              <Link to={"/customers/" + customer._id}>{customer.name}</Link>
            </li>
          
          );
        
          
      })
      : <p>Unable to load customer</p>
      }
      </ul>
      <AddCustomer newCustomer = {newCustomer}/>
    </div>
  )
}

export default Customers