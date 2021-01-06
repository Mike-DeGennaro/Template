import React, {Component} from 'react';
import './OrderScreen.css';


class OrderScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        total_items: 0,
        total:0,
        taxEx: 1.99,
        items: appets,
        selected:allOptions
        };
        this.handleClick = this.handleClick.bind(this);

      }
      handleClick(event) {
        this.setState(state => ({
          items: event
        }));
      }
      add = (name,cost) => {
        this.state.selected.map((item, id) => {
            if (item.name == name) {
                item.qty += 1;
            }
        })
        this.setState({
          total_items: this.state.total_items + 1,
          total: this.state.total + cost,
        }); 
      }
      remove = (name, cost) => {
        this.state.selected.map((item, id) => {
          if (item.name == name) {
            if(item.qty != 0) {
              item.qty -= 1;
              this.setState({
                total_items: this.state.total_items - 1,
                total: this.state.total - cost,
              });
            }
          }
        })
      }
      
      popup = () => {
        this.setState({
          popup: !this.state.popup
        });
      }
    

    render(){
return(
<div className='entire'>
<link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet"></link>
<h1>Order through our website</h1>
<h1>Or call at 123-456-7890</h1>
<hr />
<div className='selection'>
<button className='menu-btn'  onClick={() => this.handleClick(appets)}>Apps</button>
<button className='menu-btn'  onClick={() => this.handleClick(wings)}>Wings</button>
<button className='menu-btn'  onClick={() => this.handleClick(fries)}>Fries</button>
<button className='menu-btn'  onClick={() => this.handleClick(burgers)}>Burgers</button>
<button className='menu-btn'  onClick={() => this.handleClick(dogs)}>Hotdogs</button>
<button className='menu-btn'  onClick={() => this.handleClick(shakes)}>Milkshakes</button>
</div>
<div className='list-outline'>
<div className="list-container">
        {this.state.items.map((item, id) => {
          return <div className='item-container' key={id} >
                      <h3>{item.name}</h3><br />
                    <b>${(item.cost).toFixed(2)}</b> <br />
                    <button className='action-btn' onClick={() => this.add(item.name,item.cost)}>Add to Cart</button>
                    <button className='action-btn' id='other-btn' onClick={() => this.remove(item.name,item.cost)}>Remove</button>
                </div>
        })}
        </div>
        </div>
        <div className="sidecart">
          {
              
          this.state.total_items != 0 ? (<div className="popup" >
            
              <h2 className='yourOrder'>Your Order</h2>
              <div className='oreo'>
                {this.state.selected.map((item1, id1) => {

                  return(
                    <div key={id1}>
                      {item1.qty != 0 ?
                        (<div key={id1} className="cart_item">
                           <span><h3 className='first'>{item1.name} ({item1.qty})</h3><h3 className='first'>${(item1.cost * item1.qty).toFixed(2)}</h3></span>
                        </div>): null}
                    </div>
                  );

                })}
              
            <div>
              <div className="final_price">
                <div className="cart_item">
                  <h3 className='first'>All Items:</h3>
                  <h3 className='first'>${(this.state.total).toFixed(2)}</h3>
                </div>
              </div>
              <div className="final_price">
                <h3 className='first'>Total Price:</h3>
                <h3 className='first'>${(this.state.total + this.state.taxEx).toFixed(2)}</h3>
              </div>
              <form className='input'>
              <label for="name" id="label" required>Name:</label><br />
                  <input className='info2'type='text' name='name'></input><br />
                  <label for="phone" id="label" required>Phone Number:</label><br />
                  <input className='info2' type='tel' name='phone'></input><br />
                  <label for="spec" id="label">Special Requests:</label><br />
                  <textarea rows = "7" cols = "40" name = "spec" className="request"></textarea>
                  </form>
                  <p>Please allow 30 minutes for food to be prepared!</p>
              <button className="order-btn" >Looks Good</button>
            </div>
            </div>
          </div>) : (<div className="popup" ><b>Psst...Your order looks empty, let's change that.</b></div>)}
        </div>

</div>
    
)}};
const allOptions = [{
    id:'item_1',
    name:'app1',
    cost:14,
    qty:0
},{
    id:'item_2',
    name:'app2',
    cost:14,
    qty:0
},{
    id:'item_3',
    name:'app3',
    cost:14,
    qty:0
},{
    id:'item_4',
    name:'app4',
    cost:14,
    qty:0
},{
    id:'item_1',
    name:'burger1',
    cost:14,
    qty:0
},{
    id:'item_2',
    name:'burger2',
    cost:14,
    qty:0
},{
    id:'item_3',
    name:'burger3',
    cost:14,
    qty:0
},{
    id:'item_4',
    name:'burger4',
    cost:14,
    qty:0
},{
    id:'item_1',
    name:'wing1',
    cost:14,
    qty:0
},{
    id:'item_2',
    name:'wing2',
    cost:14,
    qty:0
},{
    id:'item_3',
    name:'wing3',
    cost:14,
    qty:0
},{
    id:'item_4',
    name:'wing4',
    cost:14,
    qty:0
},{
    id:'item_1',
    name:'fry1',
    cost:14,
    qty:0
},{
    id:'item_2',
    name:'fry2',
    cost:14,
    qty:0
},{
    id:'item_3',
    name:'fry3',
    cost:14,
    qty:0
},{
    id:'item_4',
    name:'fry4',
    cost:14,
    qty:0
},{
    id:'item_1',
    name:'shake1',
    cost:14,
    qty:0
},{
    id:'item_2',
    name:'shake2',
    cost:14,
    qty:0
},{
    id:'item_3',
    name:'shake3',
    cost:14,
    qty:0
},{
    id:'item_4',
    name:'shake4',
    cost:14,
    qty:0
},{
    id:'item_1',
    name:'dog1',
    cost:14,
    qty:0
},{
    id:'item_2',
    name:'dog2',
    cost:14,
    qty:0
},{
    id:'item_3',
    name:'dog3',
    cost:14,
    qty:0
},{
    id:'item_4',
    name:'dog4',
    cost:14,
    qty:0
}];
const burgers=[{
    id:'item_1',
    name:'burger1',
    cost:14,
    qty:0
},{
    id:'item_2',
    name:'burger2',
    cost:14,
    qty:0
},{
    id:'item_3',
    name:'burger3',
    cost:14,
    qty:0
},{
    id:'item_4',
    name:'burger4',
    cost:14,
    qty:0
}
]

const appets=[{
    id:'item_1',
    name:'app1',
    cost:14,
    qty:0
},{
    id:'item_2',
    name:'app2',
    cost:14,
    qty:0
},{
    id:'item_3',
    name:'app3',
    cost:14,
    qty:0
},{
    id:'item_4',
    name:'app4',
    cost:14,
    qty:0
}];
const wings=[{
    id:'item_1',
    name:'wing1',
    cost:14,
    qty:0
},{
    id:'item_2',
    name:'wing2',
    cost:14,
    qty:0
},{
    id:'item_3',
    name:'wing3',
    cost:14,
    qty:0
},{
    id:'item_4',
    name:'wing4',
    cost:14,
    qty:0
}
];
const fries=[{
    id:'item_1',
    name:'fry1',
    cost:14,
    qty:0
},{
    id:'item_2',
    name:'fry2',
    cost:14,
    qty:0
},{
    id:'item_3',
    name:'fry3',
    cost:14,
    qty:0
},{
    id:'item_4',
    name:'fry4',
    cost:14,
    qty:0
}
];
const dogs=[{
    id:'item_1',
    name:'dog1',
    cost:14,
    qty:0
},{
    id:'item_2',
    name:'dog2',
    cost:14,
    qty:0
},{
    id:'item_3',
    name:'dog3',
    cost:14,
    qty:0
},{
    id:'item_4',
    name:'dog4',
    cost:14,
    qty:0
}
];
const shakes=[{
    id:'item_1',
    name:'shake1',
    cost:14,
    qty:0
},{
    id:'item_2',
    name:'shake2',
    cost:14,
    qty:0
},{
    id:'item_3',
    name:'shake3',
    cost:14,
    qty:0
},{
    id:'item_4',
    name:'shake4',
    cost:14,
    qty:0
}
];

export default OrderScreen