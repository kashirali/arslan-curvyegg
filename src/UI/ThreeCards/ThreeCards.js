import React,{useState} from 'react'
import Card from '../Card/Card';
import './threecards.css'
import icon1 from '../../assets/svg/Communicate.svg';
import icon3 from '../../assets/svg/Collect.svg';
import icon2 from '../../assets/svg/Contribute.svg';

const ThreeCards = (props) =>{

    let comm_style={}
    let coll_style={}
    let cont_style={}
    

    const [cardId,setCardId] = useState({
        communicate:false,
        collect:false,
        contribute:false
    })

    if(cardId.communicate){
        comm_style={
            width:'100%'
        }
        coll_style={
            width:'0px',
            opacity: '0',
            transition: 'width 0.3s linear ,opacity .1s linear'
        }
        cont_style={
            width:'0px',
            opacity: '0',
            transition: 'width 0.3s linear ,opacity .1s linear'
        }
    }
    else if(cardId.collect){
        comm_style={
            width:'0px',
            opacity: '0',
            transition: 'width 0.3s linear ,opacity .1s linear'
        }
        coll_style={
            width:'100%',
         
        }
        cont_style={
            width:'0px',
            opacity: '0',
            transition: 'width 0.3s linear ,opacity .1s linear'
        }
    }
    else if(cardId.contribute){
        comm_style={
            width:'0px',
            opacity: '0',
            transition: 'width 0.3s linear ,opacity .1s linear'
        }
        coll_style={
            width:'0px',
            opacity: '0',
            transition: 'width 0.3s linear ,opacity .1s linear'
         
        }
        cont_style={
            width:'100%',
            
        }
    }




    const [cardbtnclick,setCardbtnclick] = useState(false)
    const [cardData] = useState({
        one:{
            imgsrc:icon1,
            head:'Communicate',
            para:'Effectively & respond to your customers’ queries, by reaching their comfort zone. We will give them personalized customer experience, they will never forget, while choosing anyone over you.'
        },
        two:{
            imgsrc:icon2,
            head:'Collect',
            para:'Information by interacting with your customers and engaging them with your product. We will keep all conversations safe and maintain a systematic record of the data gathered.'
        },
        three:{
            imgsrc:icon3,
            head:'Contribute',
            para:'Productively towards improvising and improving your product, by making best use of the important feedback we collected for you, also get better insights about your customers, all in one place.'
        }
    });
    const [Commcardbtnclick,setCommCardbtnclick] = useState(false);
    const [Collcardbtnclick,setCollCardbtnclick] = useState(false);
    const [Contcardbtnclick,setContCardbtnclick] = useState(false)
    const showMoreDetail = (id)=>{
        if(id === 'communicate'){
            setCardId({
                collect:false,
                contribute:false,
                communicate:!cardId.communicate
            })
            setCommCardbtnclick(!Commcardbtnclick);

        }    
        else if(id === 'collect'){
            setCardId({
                collect:!cardId.collect,
                contribute:false,
                communicate:false
            })
            setCollCardbtnclick(!Collcardbtnclick);

        } 
        else if(id === 'contribute'){
            setCardId({
                collect:false,
                contribute:!cardId.contribute,
                communicate:false
            })

            setContCardbtnclick(!Contcardbtnclick);
        } 
        console.log('clicked')
      
        
       }


         
    return(
        <div className='threecardsmain' style={{width:'100%',margin:'50px 0px !important',paddingBottom:'20px'}}>
            
            <div style={comm_style} >
            <Card cardDetail={cardData.one} cardReadMore={()=>showMoreDetail('communicate')} btnClicked ={Commcardbtnclick} handleclose={()=>showMoreDetail('communicate')}/>

            </div>
           
           <div style={coll_style}>
                <Card cardDetail={cardData.two} cardReadMore={()=>showMoreDetail('collect')} btnClicked ={Collcardbtnclick}  handleclose={()=>showMoreDetail('collect')}/>
    
                </div> 
           
          <div style={cont_style}>
                <Card cardDetail={cardData.three} cardReadMore={()=>showMoreDetail('contribute')} btnClicked ={Contcardbtnclick}  handleclose={()=>showMoreDetail('contribute')}/>
    
                </div>
        </div>
    );
}

export default ThreeCards;