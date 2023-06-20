import React from 'react';
import './FAQ.css'

function FAQ() {
    return (
        <div class='container'>
            <h1>FAQ</h1>
            <p>Find the answers for the most frequently asked questions below.</p>
            <div class='grid'>
                <div class='item'>
                    <h3>Are my payments secure?</h3>
                    <p><strong>Absolutely!</strong> We work with top payment companies which guarantees your safety and security. All billing information is stored on our payment processing partner.</p>
                </div>
                <div class='item'>
                    <h3>Can I cancel my subscription anytime?</h3>
                    <p><strong>Yes, it is possible!</strong>  You can cancel your subscription anytime in your account. Once the subscription is cancelled, you will not be charged next month.</p>
                </div>
                <div class='item'>
                    <h3>What subscription lengths are offered?</h3>
                    <p>Currently, we only offer monthly subscription. You can upgrade or cancel your monthly account at any time with no further obligation.</p>
                </div>
                <div class='item'>
                    <h3>Can I update my payment information?</h3>
                    <p>Yes. Go to the billing section of your dashboard and update your payment information.</p>
                </div>
                <div class='item'>
                    <h3>Can I get a refund after placing an order?</h3>
                    <p><strong>Unfortunately no.</strong> We do not issue full or partial refunds for any reason.</p>
                </div>
                <div class='item'>
                    <h3>Do you offer a free trial to test the service?</h3>
                    <p>Of course! We’re happy to offer a free plan to anyone who wants to try our service. </p>
                </div>
            </div>
        </div>
    )
}

export default FAQ;
