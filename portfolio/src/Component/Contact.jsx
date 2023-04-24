import React from 'react'

const Contact = () => {

    const submitForm = (event) => {
        event.preventDefault();
    }

    return (
        <div className='contact'>
            <div className="headline">
                <span>Contact <span>Me!</span></span>
            </div>
            <form className='form'>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input type="text" name='fullName' required placeholder='Enter Full Name' />
                </div>
                <div className="form-main-grp">
                    <div className="form-group">
                        <label htmlFor="mobNo">Mobile Number (optional)</label>
                        <input type="text" name='mobNo' placeholder='Enter Moble Number' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email (optional)</label>
                        <input type="text" name='email' placeholder='Enter Email' />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea type="text" name='message' required placeholder='Enter Message' />
                </div>
                <div className="form-group">
                    <label htmlFor="fullName">Subject *</label>
                    <input type="text" name='subject' required placeholder='Enter Subject' />
                </div>
                <div className="btn">
                    <button type='submit' onClick={submitForm}>Send</button>
                </div>  
            </form>
        </div>
    )
}
export default Contact;