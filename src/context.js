import React, { Component } from 'react';
import {storeProducts, detailProduct} from  './data';
const ProductContext = React.createContext();
//Provider

//Consumer

class ProductProvider extends Component {
    state={
        products: [],
        detailProduct: detailProduct,
         cart: [],
         modalOpen: false,
         successOpen: false,
         modalProduct: detailProduct,
         cartSubTotal: 0,
         cartTax:0,
         cartTotal: 0,
    }
    componentDidMount(){
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem]
        })
        this.setState(() => {
            return {products: tempProducts}
        })
    }
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }
    handleDetail = id =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailProduct: product}
        })
    }
    resetCart= () => {
        console.log(this.state)
        this.setState({
            cart: []
        })
        console.log(this.state.products)
        this.state.products.map(item => (
            item.count = 0,
            item.inCart = false
            
        ))
        
    }
    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        if(product.count === 0){
            product.count =1
        }
        const price = product.price;
        product.total = price;
        this.setState(()=>{
            return {
                products:tempProducts,
                cart:[...this.state.cart,product]
            }
        },() => this.addTotals())
    }
    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {modalProduct: product, modalOpen: true}
        })
    }
    closeModal = id =>{
        this.setState(()=>{
            return{modalOpen:false}
        })
    }
    incrementDetail = (id) => {
        let tempProducts = [...this.state.products];
        const selectedProduct = tempProducts.find(item => item.id ===id);
        const index = tempProducts.indexOf(selectedProduct);
        const product = tempProducts[index]
        product.count = product.count + 1;
        product.total = product.price * product.count;
        this.setState(
            () => {
                return {
                    products:[...tempProducts]
                }
            },
            () => {
                this.addTotals();
            }
        )
    }
    decrementDetail = (id) => {
        let tempProducts = [...this.state.products];
        const selectedProduct = tempProducts.find(item => item.id ===id);
        const index = tempProducts.indexOf(selectedProduct);
        const product = tempProducts[index]
        if(product.count > 0){
            product.count = product.count - 1;
        }
        
        product.total = product.price * product.count;
        this.setState(
            () => {
                return {
                    products:[...tempProducts]
                }
            },
            () => {
                this.addTotals();
            }
        )
    }
    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id ===id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.price * product.count;
        this.setState(
            () => {
                return {
                    cart:[...tempCart]
                }
            },
            () => {
                this.addTotals();
            }
        )
    }
    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id ===id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        console.log(product);
        product.count = product.count - 1;
        product.total = product.price * product.count;
        if(product.count === 0){
            this.removeItem(id);
        } else {
            product.total = product.count * product.price;
            this.setState(
                () => {
                    return {
                        cart:[...tempCart]
                    }
                },
                () => {
                    this.addTotals();
                }
            )
        }
    }
    changeSize = (id, selectedOption) => {
        let tempProducts = [...this.state.products];
        const selectedProduct = tempProducts.find(item => item.id ===id);
        const index = tempProducts.indexOf(selectedProduct);
        const product = tempProducts[index];
        product.size = selectedOption;
        product.count = product.size.length;
    }
    showSizes = () => {
        console.log('aaa')
    }
    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
    
        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;
        
        this.setState(
            () => {
            return {
                cart:[...tempCart],
                products:[...tempProducts]
            }
        },
        ()=> {

            this.addTotals();
        }
        )
        
    }
    clearCart = () => {
        this.setState(()=> {
            return {cart: []}
        }, () => {
            this.setProducts();
            this.addTotals();
        })
    }
    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += (item.total * item.count)));
        const tempTax = subTotal * 0.08;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax, 
                cartTotal: total
            }
        })
        
    }
    render() {
        return (
            <ProductContext.Provider value={
                {
                    ...this.state,
                    resetCart: this.resetCart,
                    showSizes: this.showSizes,
                    addTotals: this.addTotals,
                    decrementDetail: this.decrementDetail,
                    incrementDetail: this.incrementDetail,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart,
                    changeSize: this.changeSize
                }
            }>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}
const ProductConsumer = ProductContext.Consumer;

export{ProductProvider, ProductConsumer}