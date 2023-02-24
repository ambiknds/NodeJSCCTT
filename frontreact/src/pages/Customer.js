import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseUrl } from "../shared";
// import NotFound from "../components/NotFound";

export default function Customer() {
    const [customer, setCustomer] = useState();
    const [notFound, setNotFound] = useState();
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() => {
        // console.log('useEffect')
        const url = baseUrl + 'api/customers/' + id;
        fetch(url).then((response) => {
            if(response.status == 404 ){
                //redirect to 404 page (new URL)
                //navigate('/404')
                //render a 404 page in this component
                setNotFound(true)
            }
            return response.json()
        })
        .then((data) => {
            setCustomer(data.customer)
        })
    },[]);
    
    return (
        <div>
            {notFound ? <p>The customer with id {id} was not found.</p>: null}
            {customer ? <div>
            <p>{customer.id}</p>
            <p>{customer.name}</p>
            <p>{customer.industry}</p>
        </div>:null}
            <button className="bg-teal-300"
            onClick={(e) => {
                const url = baseUrl + 'api/customers/' + id;
                fetch(url, { method: 'DELETE', headers: {
                    'Content-Type' : 'application/json'
                }})
                .then((response) => {
                    if(!response.ok) {
                        throw new Error('Something Went Wrong.')
                    }
                    //assume thing went well
                    navigate('/customers')
                })

                .catch((e) => {
                    console.log(e)
                })
                
            }}>Delete</button>
            <br/>
            <Link to='/customers/'>Go Back</Link>
        </div>
    )
            
}
