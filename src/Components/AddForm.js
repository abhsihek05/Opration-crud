import React,{useState} from "react";



const AddForm = (props) => {
    
    const [NameVal, setNameVal] = useState(null);
    const [EmailVal, setEmailVal] = useState(null);
    const [PassVal, setPassVal] = useState(null);
    const [Data, setData] = useState({
        name:"",
        email:"",
        phone:""
    })


    
     const  postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    });
    return response.json();    
  }




    const handleChange = (e) => {
        let obj = Data;
        obj[e.target.name] = e.target.value;
        setData(obj);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(Data);


         postData('http://localhost:3002/users', Data) 
        
        
    }
  
   
    return (
        <>
        <div className="text-center fs-3 fw-700 ">Add form for practice</div>
            <div className="container m-5 p-4 text-light d-flex justify-content-center">


                <form className="p-3 w-50 bg-secondary" onSubmit={handleSubmit}>
                <div className="">
                        <label for="exampleInputEmail1" className="form-label d-block">User Name</label>
                        <input name="name" type="text"  id="exampleInputEmail1" aria-describedby="emailHelp" value={NameVal}  onChange={handleChange} />
                        <div id="emailHelp" className="form-text text-light opacity-50" >We'll never share your email with anyone else.</div>
                    </div>
                    <div className="">
                        <label for="exampleInputEmail1" className="form-label d-block">Email address</label>
                        <input name="email" type="text"  id="exampleInputEmail1" aria-describedby="emailHelp" value={EmailVal}  onChange={handleChange} />
                        <div id="emailHelp" className="form-text text-light opacity-50" >We'll never share your email with anyone else.</div>
                    </div>
                    <div className="">
                        <label for="exampleInputEmail1" className="form-label d-block">Phone Numebr</label>
                        <input name="phone" type="text"  id="exampleInputEmail1" aria-describedby="emailHelp" value={EmailVal}  onChange={handleChange} />
                        <div id="emailHelp" className="form-text text-light opacity-50" >We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label d-block">Password</label>
                        <input name="pass" type="password" id="exampleInputPassword1"  value={PassVal} onChange={handleChange} />
                    </div>
                    <div className="">
                      </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </>
    )
}


export default AddForm;
