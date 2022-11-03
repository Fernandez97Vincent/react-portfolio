import React from 'react';
import './style.css';

function Contact() {
    return (

        <div class='form-container'>
            <form>
                <div class="form-group">
                    <label for="formControlInput1">Email Address</label>
                    <input type="email" class="form-control" id="formControlInput1" placeholder="name@example.com"></input>
                </div>
                <div class="form-group">
                    <label for="formControlInput2">Name</label>
                    <input type="email" class="form-control" id="formControlInput2" placeholder="First Name, Last Name"></input>
                </div>
                <div class="form-group">
                    <label for="formControlTextarea1">Leave a message!</label>
                    <textarea class="form-control" id="formControlTextarea1" rows="3"></textarea>
                    <input class="btn btn-primary" type="submit" value="Submit"></input>
                </div>
            </form>
        </div>

    )
}

export default Contact;