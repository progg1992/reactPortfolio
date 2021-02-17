import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../Images/phone.png';
import email from '../Images/email.png';
import Title from '../Components/Title';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Title title={'Contact Me'} span={'Contact Me'} />
            </div>
            <div className="ContactPage">
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+1 906-290-9364'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'ptrogg1992@gmail.com'} title={'Email'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;