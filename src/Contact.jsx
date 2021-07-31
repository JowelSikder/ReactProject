import React, { useState } from 'react'


const Contact = () => {

    const [data, setData]= useState({
        fullName:"",
        phone: "",
        email: "",
        text : "",
    })

    const inputEvent = (event) => {
        const{name, value} = event.target;

        setData((preValue)=> {
            return{
             ...preValue,
             [name]:value,
            }
         })
    }



    const submit =(e) => {
        e.preventDefault()
        alert("Submitted")
    }
    return(
        <>
            <section>
                <div className="my-5">
                    <div className="container">
                    <h2 className="text-center mb-2">Contact Us</h2>
                        <div className="row">
                            <div className="col-md-6 col-10 mx-auto">
                                <form onSubmit={submit}>
                                <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input name='fullName' autoComplete="off" value={data.fullName} onChange={inputEvent} type="email" class="form-control" id="exampleFormControlInput1"/>
                                </div>

                                <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                <input name='phone' autoComplete="off" value={data.phone} onChange={inputEvent} type="number" class="form-control" id="exampleFormControlInput1"/>
                                </div>

                                <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input name='email' autoComplete="off" value={data.email} onChange={inputEvent} type="email" class="form-control" id="exampleFormControlInput1"/>
                                </div>
                                <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                <textarea name='text' value={data.text} onChange={inputEvent} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                <div>
                                    <button class="btn btn-outline-primary" type="submit">Submit form</button>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact