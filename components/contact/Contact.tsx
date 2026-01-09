"use client";

import { FaRegCopy } from 'react-icons/fa';
import './style.css';

const Contact = () => {
    return (
        <>
            <main>
                <section className="contact-section">
                    <div className='title'>
                        <h1>Let&apos;s Chat</h1>
                    </div>
                    <div className="mail-div">
                        <div className='copy-text-div'>
                            <p className='mail-text'>abhisheksharmayt2@gmail.com</p>
                        </div>
                            <div className="copy-icon-div" onClick={()=>{
                                navigator.clipboard.writeText('abhisheksharmayt2@gmail.com')
                            }}>
                                <FaRegCopy className='copy-icon-link' />
                            </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Contact;

