import React,{useState,useEffect} from 'react'
import './animatechat.css'
function AnimateChat() {
   
    
    const [cardShow,setCardShow] = useState([]);
    useEffect(() => {      
        let time = 1000;
            setTimeout(hideElement, 1000) //milliseconds until timeout//
            

            // setTimeout(hideElement, 1000) //milliseconds until timeout//
            // setTimeout(hideElement, 1000) //milliseconds until timeout//
            // setTimeout(hideElement, 1000) //milliseconds until timeout//
            // setTimeout(hideElement, 1000) //milliseconds until timeout//
            
     
        return () => {
            
        }
    })
    

    
    function hideElement() {
           
           if(cardShow.length >= 18){
               setCardShow([])
           }
           else setCardShow([...cardShow,true])
        }
    
    return (
        <div >
            <section class="chat" >
            {cardShow[17] ? <div class="chat__message chat__message_B" id="id1">
      <div class="chat__content">
         <p>Thank you.</p>   
      </div>
        <p>customer</p>
   </div>:null}
   
        {cardShow[15] ?  <div class="chat__message chat__message_A" id="id2">
      <div class="chat__content">
         <p>Mr.Doe, your current balance is $19,606.76</p>   
      </div>
      <p>operator</p>
   </div>:null}
  
        {cardShow[13] ? <div class="chat__message chat__message_A">
      <div class="chat__content">
         <p>Sure, let me check...</p>   
      </div>
      <p>operator</p>
   </div>  :null}
   
        {cardShow[11] ?  <div class="chat__message chat__message_B" >
      <div class="chat__content">
         <p>Hi jane, I'm John Doe. <br />
            I need to know my current account balance</p>   
      </div>
      <p>customer</p>
   </div>:null}
  
        {cardShow[9]?  <div class="chat__message  chat__message_A" >
      <div class="chat__content">
         <p>Hello, my name is Jane.<br />
            How can I help you?</p>   
      </div>
      <p>operator</p>
   </div>:null}

   {cardShow[7] ? <div class="chat__message chat__message_B" id="id1">
      <div class="chat__content">
         <p>Thank you.</p>   
      </div>
      <p>customer</p>
   </div>:null}
   
        {cardShow[5] ?  <div class="chat__message chat__message_A" id="id2">
      <div class="chat__content">
         <p>Mr.Doe, your current balance is $19,606.76</p>   
      </div>
      <p>operator</p>
   </div>:null}
  
        {cardShow[3] ? <div class="chat__message chat__message_A">
      <div class="chat__content">
         <p>Sure, let me check...</p>   
      </div>
      <p>operator</p>
   </div>  :null}
   
        {cardShow[1] ?  <div class="chat__message chat__message_B" >
      <div class="chat__content">
         <p>Hi jane, I'm John Doe. <br />
            I need to know my current account balance</p>   
      </div>
      <p>customer</p>
   </div>:null}
  
        {cardShow[0]?  <div class="chat__message  chat__message_A" >
      <div class="chat__content">
         <p>Hello, my name is Jane.<br />
            How can I help you?</p>   
      </div>
      <p>operator</p>
   </div>:null}
           


</section>
        </div>
    )
}

export default AnimateChat
