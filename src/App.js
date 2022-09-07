import {useState} from 'react';
import './App.css';
import Navigation from './component/Navigation';
import Header from './component/Header';
import { Rating } from '@mui/material';
function App() {
  let [cartvalue,setcartvalue]=useState(0);
  let [toggle1,setToggle1]=useState(false);
  let [toggle2,setToggle2]=useState(false);
  let [toggle3,setToggle3]=useState(false);
  let [toggle4,setToggle4]=useState(false);
  let [toggle5,setToggle5]=useState(false);
  let [toggle6,setToggle6]=useState(false);
  let [toggle7,setToggle7]=useState(false);
  let [toggle8,setToggle8]=useState(false);
  return <>
  <div>
    <Navigation data={{cartvalue:cartvalue}}/>
    <Header/>
    <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <div className="col mb-5">
                        <div className="card h-100">
                          {/* <!-- Product image-->*/}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/*<!-- Product details-->*/}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/*<!-- Product name-->*/}
                                    <h5 className="fw-bolder">I phone 11</h5>
                                    {/*<!-- Product price-->*/}
                                    rs.45,000
                                </div>
                            </div>

                            
                           {/* <!-- Product actions-->*/}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle1? <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setcartvalue(cartvalue-1);
                                    setToggle1((previous)=>!previous)}}
                                  >Remove</button>:<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setcartvalue(cartvalue+1)
                                    setToggle1((previous)=>!previous)
                                  }} >Add to cart</button>
                                }
                                <Rating name="half-rating" defaultValue={3}  />
                               
                                  </div>
                            </div>
                        </div>
                </div>

                <div className="col mb-5">
                        <div className="card h-100">
                          {/* <!-- Product image-->*/}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/*<!-- Product details-->*/}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/*<!-- Product name-->*/}
                                    <h5 className="fw-bolder">I phone 13pro max</h5>
                                    {/*<!-- Product price-->*/}
                                    rs.1,37,000
                                </div>
                            </div>

                            
                           {/* <!-- Product actions-->*/}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle2? <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setcartvalue(cartvalue-1);
                                    setToggle2((previous)=>!previous)}}
                                  >Remove</button>:<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setcartvalue(cartvalue+1)
                                    setToggle2((previous)=>!previous)
                                  }} >Add to cart</button>
                                }
                                <Rating name="half-rating" defaultValue={3}  />
                                  </div>
                            </div>
                        </div>
                </div>

                <div className="col mb-5">
                        <div className="card h-100">
                          {/* <!-- Product image-->*/}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/*<!-- Product details-->*/}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/*<!-- Product name-->*/}
                                    <h5 className="fw-bolder">I phone 8</h5>
                                    {/*<!-- Product price-->*/}
                                    rs.36,000
                                </div>
                            </div>

                            
                           {/* <!-- Product actions-->*/}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle3? <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setcartvalue(cartvalue-1);
                                    setToggle3((previous)=>!previous)}}
                                  >Remove</button>:<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setcartvalue(cartvalue+1)
                                    setToggle3((previous)=>!previous)
                                  }} >Add to cart</button>
                                }
                                <Rating name="half-rating" defaultValue={3}  />
                                  </div>
                            </div>
                        </div>
                </div>

                <div className="col mb-5">
                        <div className="card h-100">
                          {/* <!-- Product image-->*/}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/*<!-- Product details-->*/}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/*<!-- Product name-->*/}
                                    <h5 className="fw-bolder">samsung A6</h5>
                                    {/*<!-- Product price-->*/}
                                    rs.36,000
                                </div>
                            </div>

                            
                           {/* <!-- Product actions-->*/}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle4? <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setcartvalue(cartvalue-1);
                                    setToggle4((previous)=>!previous)}}
                                  >Remove</button>:<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setcartvalue(cartvalue+1)
                                    setToggle4((previous)=>!previous)
                                  }} >Add to cart</button>
                                }
                                <Rating name="half-rating" defaultValue={3}  />
                                  </div>
                            </div>
                        </div>
                </div>

                <div className="col mb-5">
                        <div className="card h-100">
                          {/* <!-- Product image-->*/}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/*<!-- Product details-->*/}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/*<!-- Product name-->*/}
                                    <h5 className="fw-bolder">Nokia S7</h5>
                                    {/*<!-- Product price-->*/}
                                    rs.36,000
                                </div>
                            </div>

                            
                           {/* <!-- Product actions-->*/}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle5? <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setcartvalue(cartvalue-1);
                                    setToggle5((previous)=>!previous)}}
                                  >Remove</button>:<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setcartvalue(cartvalue+1)
                                    setToggle5((previous)=>!previous)
                                  }} >Add to cart</button>
                                }
                                <Rating name="half-rating" defaultValue={3}  />
                                  </div>
                            </div>
                        </div>
                </div>

                <div className="col mb-5">
                        <div className="card h-100">
                          {/* <!-- Product image-->*/}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/*<!-- Product details-->*/}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/*<!-- Product name-->*/}
                                    <h5 className="fw-bolder">Blackberry A9</h5>
                                    {/*<!-- Product price-->*/}
                                    rs.36,000
                                </div>
                            </div>

                            
                           {/* <!-- Product actions-->*/}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle6? <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setcartvalue(cartvalue-1);
                                    setToggle6((previous)=>!previous)}}
                                  >Remove</button>:<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setcartvalue(cartvalue+1)
                                    setToggle6((previous)=>!previous)
                                  }} >Add to cart</button>
                                }
                                <Rating name="half-rating" defaultValue={3}  />
                                  </div>
                            </div>
                        </div>
                </div>

                <div className="col mb-5">
                        <div className="card h-100">
                          {/* <!-- Product image-->*/}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/*<!-- Product details-->*/}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/*<!-- Product name-->*/}
                                    <h5 className="fw-bolder">Vivo 11 pro</h5>
                                    {/*<!-- Product price-->*/}
                                    rs.36,000
                                </div>
                            </div>

                            
                           {/* <!-- Product actions-->*/}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle7? <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setcartvalue(cartvalue-1);
                                    setToggle7((previous)=>!previous)}}
                                  >Remove</button>:<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setcartvalue(cartvalue+1)
                                    setToggle7((previous)=>!previous)
                                  }} >Add to cart</button>
                                }
                                <Rating name="half-rating" defaultValue={3}  />
                                  </div>
                            </div>
                        </div>
                </div>

                <div className="col mb-5">
                        <div className="card h-100">
                          {/* <!-- Product image-->*/}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/*<!-- Product details-->*/}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/*<!-- Product name-->*/}
                                    <h5 className="fw-bolder">Oppo F9</h5>
                                    {/*<!-- Product price-->*/}
                                    rs.36,000
                                </div>
                            </div>

                            
                           {/* <!-- Product actions-->*/}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle8? <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setcartvalue(cartvalue-1);
                                    setToggle8((previous)=>!previous)}}
                                  >Remove</button>:<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setcartvalue(cartvalue+1)
                                    setToggle8((previous)=>!previous)
                                  }} >Add to cart</button>
                                }
                                <Rating name="half-rating" defaultValue={3}  />
                                  </div>
                            </div>
                        </div>
                </div>
     </div>
     </div>
    </section>
    <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
        </footer>
  </div>
  </>
    
  
}

export default App;
