import './App.css';
import React,{useState} from 'react';

function App() {

  const [amount, setamount] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault();
      var options = {
        key: "rzp_test_boXpT1w7FW6xiq",
        key_secret: "NgAgqg8Jtn64Lgm5jhDwyL4p",
        amount: amount *100,
        currency:"INR",
        name:"Payment Gateway",
        description:"for testing",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"Synergy Universal",
          email:"gadilakarthikreddy2@gmail.com",
          contact: "",

        },
        notes:{
          address:"Madhapur"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    
  }
  
  return (
    
    <div className="App">
      <div className='bg'></div>
     <h2>Payment gateway</h2>
     <br/>
     
     <h3>Name</h3>
     <input type='text' placeholder='Enter Name'></input>
  
     <h3>MailID</h3>
     <input type='MailID' placeholder='Enter Email'></input>
     
     <h3>Mobile</h3>
     <input type='text' placeholder='Enter Number'></input>
     
     <h3>Amount</h3>
     <input type='text' placeholder='Enter Amount' value={amount} onChange={(e)=>setamount(e.target.value)}></input>
     <br/><br/><br/>
     
     <button onClick={handleSubmit}>Pay</button> 
    </div>  
  );
  
}

export default App;
