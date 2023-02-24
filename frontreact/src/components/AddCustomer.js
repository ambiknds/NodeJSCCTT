// Copy code from edit employee and edit accordingly to add customer
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export default function AddCustomer(props) {
  const [name, setName] = useState('');
  const [industry,setIndustry] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow}
        className=" block m-2 mx-auto bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-3 rounded">
            + Add Customer
      </button>
      
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"                                                                 
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form 
            onSubmit={(e)=> {
              e.preventDefault();
              setName('');
              setIndustry('');
              props.newCustomer(name, industry);
            }} 
            id="editmodal" className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">                                                                                                                                                                                                                  
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                for="name">
                  Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                 placeholder= "Enter your Name"                                                                                                                   
                 id="name" type="text" value={name} 
                 onChange={(e)=>{setName(e.target.value)}}/>
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="role">
                  Industry
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                placeholder="Enter your Industry"
                id="industry" type="text" value={industry} 
                onChange={(e)=>{setIndustry(e.target.value)}}
                />
              </div>
            </div>
            
            
          </form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button className="bg-slate-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" variant="secondary" onClick={handleClose}>
            Close
          </Button>
           */}
           <button className='bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded' onClick={handleClose}
           >
          Close
          </button>
          <button 
          onClick={handleClose} className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded' 
          form="editmodal"
          >
          Add Customer
          </button>
          {/* canuse bootstrap button also
          <Button form="editmodal" variant="primary">Update</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

