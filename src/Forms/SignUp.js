import React, { useState } from 'react';

function SignUP() {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");




    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === "") {
            alert("***please fill the Password");
        }
        else if (!password.includes("@" || "#" || "$", "&")) {
            alert("***Password contains one LowerCase And One UpperCase and A Special character");
        }
        else if (password.length <= 9) {
            alert("***Password contains minimun ten charachters");
        }
        else {

        }



        if (email === "") {
            alert("**Please fill the Email Box");
        }

        else if (email.length <= 4) {
            alert("***Please fill the Valid Email");
        }

        else {
            const atposition = email.indexOf("@");
            const dotposition = email.lastIndexOf(".");
            if (atposition < 1 || dotposition < atposition + 2) {
                alert("Please enter a valid e-mail address with the position of @ and Dot(.)")
            }
        }
    }


    return (
        <>
            <h4 className='text-center p-3'>This is the Form Submition</h4>
            <div className='container-fluid' style={{ margin: "100px", width: "400px", height: "auto", padding: "20px", border: "1px solid black" }}>
                <form onSubmit={handleSubmit} action="">
                    <label className='d-block '>Last  name</label>
                    <input type="text" placeholder='enter your fname' onChange={(e) => setFname(e.target.value)} />
                    <label className='d-block '>first name</label>
                    <input type="text" placeholder='enter your fname' onChange={(e) => setLname(e.target.value)} />
                    <label className='d-block '>Email</label>
                    <input type="text" placeholder='enter your Email' onChange={(e) => setEmail(e.target.value)} />
                    <label className='d-block mt-2'>Password</label>
                    <input type="text" placeholder='enter your Password' onChange={(e) => setPassword(e.target.value)} />
                    <div className='pt-2'> <button type="submit">Submit</button></div>
                </form>
            </div>
        </>
    );
}

export default SignUP;
