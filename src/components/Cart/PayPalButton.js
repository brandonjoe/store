import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import Success from './Success.js';
import { ProductConsumer } from '../../context.js';
import Product from '../Product.js';
export default class MyApp extends React.Component {
    constructor(props){
        super(props);
        this.state={
            pay: {},
            isComplete: false,
        };
    }
    componentDidMount() {
        this.setState({
            isComplete: false
        })
    }
    render() {

        const onSuccessb = (payment) => {
            // Congratulation, it came here means everything's fine!
                    console.log("The payment was succeeded!", payment);

                    this.setState({
                        pay:payment,
                        isComplete:true
                    })

                    // this.props.clearCart();
                    // this.props.history.push('/');
                    // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data

        }
 
        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }
 
        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
        }
 
        let env = 'production'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state
        // let total = 1; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/
 
        const client = {
            sandbox:   process.env.REACT_APP_APP_ID,
            production: 'AaGPaVaK6qWblX5ylEuMu5_wzq7uk_9IYPSxS9bGynh9ddt5-CVqbDPzneghqY0bCpJEyeZci-OHWW8T',
        }
        // In order to get production's app-ID, you will have to send your app to Paypal for approval first
        // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
        //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
        // For production app-ID:
        //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/
 
        // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
        if(this.state.isComplete === false) {return (
            <PaypalExpressBtn env={env} client={client} currency={currency} total={this.props.total} onError={onError} onSuccess={onSuccessb} onCancel={onCancel} />
   
        )} else {
            return (
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        return( <Success  
                            total={this.props.total}
                            street={this.state.pay.address.line1} 
                            city={this.state.pay.address.city} 
                            state={this.state.pay.address.state}
                            zip={this.state.pay.address.postal_code}
                            name={this.state.pay.address.recipient_name} 
                            email={this.state.pay.email}
                            carty={cart}
                            isComplete={this.state.isComplete}
                            
                            />
                            )
                       
                    }}
                    
                   
                </ProductConsumer>
            
            )
        }
    }
}