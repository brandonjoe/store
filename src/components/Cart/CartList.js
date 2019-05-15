import React from 'react';
import CartItem from './CartItem';

const CartList = ({value}) => {
   
const {cart} = value;
// const cart  =   [{
//     id: 1,
//     title: ".11ct Diamond ring in 14k gold",
//     img2: "img/product-1.jpg",
//     img: "img/product-1-2.jpg",
//     img3: "img/product-1-3.jpg",
//     price: 10,
//     size: [],
//     info:
//       "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
//     inCart: false,
//     count: 0,
//     total: 0
//   },
//   {
//     id: 2,
//     title: "Sapphire ring in 14k gold",
//     img: "img/product-2.jpg",
//     price: 16,
//     size: [],
//     info:
//       "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
//     inCart: false,
//     count: 0,
//     total: 0
//   }]

    return (
        <div className='container-fluid'>
            {cart.map(item=>{
                return <CartItem key={item.id} item={item} value={value}/>
            })}
            
        </div>
    );
};

export default CartList;