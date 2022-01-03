import React,{useEffect, useState} from 'react'

import Header from '../../Components/Header/Header'
import OnlyFooter from '../../Components/OnlyFooter/OnlyFooter'

import {motion} from 'framer-motion'

import './termpolicy.css'
import PopupTerms from '../Popupterm/Popupterm'

import {useParams} from 'react-router-dom'

export function vakanda()
{
    if(window.innerWidth > 992)
    {
        const marfa = document.getElementsByTagName('body');
         marfa[0].style = "overflow:hidden;"
    }
}

function varsa()
{
    // if(window.innerWidth < 992)
    // {
    //    const cake = document.getElementsByTagName('body');
    //    const lake = document.getElementById('mainer_close');
    //    cake[0].style = "overflow: hidden;"
    //    lake.style = `max-height: ${lake.offsetHeight+130}px;`
    //    lake.style = "margin: 0;"
    //    lake.style = "overflow: scroll;";

    // }
    
}
function Termpolicy() {

    const {id} = useParams()
    console.log(id,'id')
    let servicetext = (<motion.div className="para_text"
        initial={{opacity:0}}
        animate={{opacity:1}}
    >
    <p >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo <br/><br/>inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat <br/><br/>voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?<br/><br/>
    

    </p>
    <ul>
        <li>we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms </li>
        <li> in certain circumstances and owing to the claims of duty or the obligations of business</li>
        <li> he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains</li>
        <li>In a free hour, when our power of choice is untrammelled</li>
        </ul>
    <br/>
    <p>  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti<br/><br/> atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.<br/><br/> Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.  Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae</p>
    <br/>
    </motion.div>);

    let policytext = (
        <motion.div className="para_text"
        initial={{opacity:0}}
        animate={{opacity:1}}
        >
    <p >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo <br/><br/>inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat <br/><br/>voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?<br/><br/>
    

    </p>
    <br/>
  
    
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti<br/><br/> atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.<br/><br/> Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.  Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae</p>
    <br/>
    </motion.div>
    )
    const [popupshow,setPopupshow] = useState(false);
    const onpopupimgclick = ()=>(setPopupshow(false))
    useEffect(()=>{
        setTimeout(()=>setPopupshow(true),1000);
    },[])
    const [termData,setTermData] = useState({
        service:{
            head:'Terms of Services',
            text:servicetext
        },
        privacy:{
            head:'Privacy Policy',
            text:policytext
        },
        accessibility:{
            head:'Accessibility',
            text:policytext
        }


    })
        const[activeterm,setActiveterm] = useState({
            service:id === 'service' ? true :false,
            privacy:id === 'privacy' ? true : false,
            accessibility:id === 'accessibility' ? true : false
        })
    const setTermactive = (id)=>{
            if(id === 'service'){
                setActiveterm({privacy:false,accessibility:false,service:true})
            }
            else if(id === 'privacy'){
                setActiveterm({privacy:true,accessibility:false,service:false})
            }
            else if(id === 'accessibility'){
                setActiveterm({privacy:false,accessibility:true,service:false})
            }
       
    }
    vakanda();
    return (
        <div>
          
            {popupshow?  <PopupTerms setPopupshow={setPopupshow} />:null}
        <div className="termpage" id="arslan_easter_egg">
            <Header headercrossicon={popupshow} onpopupimgclick= {onpopupimgclick}/>
       
           {!popupshow && <>
            <div style={{objectFit:'contain'}}>

            
            </div>
            <div className="container termtop" style={{marginTop:'80px'}}>
            <div className="text-center mx-auto">
                <div className="btn-group" role="group">
                    <div onClick={()=>setTermactive('service')} className={activeterm.service?"btngroup btn1 btn_clicked":"btngroup btn1" }>Terms of Services</div>
                    <div onClick={()=>setTermactive('privacy')} className={activeterm.privacy?"btngroup btn2 btn_clicked":"btngroup btn2"}>Privacy Policy</div>
                    <div onClick={()=>setTermactive('accessibility')} className={activeterm.accessibility?"btngroup btn3 btn_clicked":"btngroup btn3"}>Accessibility</div>
                  </div>
                </div>
                  <br/>
                  <br/>
                  <p className="somethingText">Something Like</p>
                  {activeterm.service  && <motion.h3 className="termhead"  initial={{opacity:0}}  animate={{opacity:1}}>{termData.service.head}</motion.h3>}
                  {activeterm.privacy && <motion.h3 className="termhead"  initial={{opacity:0}}  animate={{opacity:1}}>{termData.privacy.head}</motion.h3>}
                  {activeterm.accessibility && <motion.h3 className="termhead" initial={{opacity:0}}  animate={{opacity:1}} >{termData.accessibility.head}</motion.h3>}
                  
                  {activeterm.service && termData.service.text}
                  {activeterm.privacy && termData.privacy.text}
                  {activeterm.accessibility && termData.accessibility.text}
                <div class="submitbtn">
                    <button type="button" class="btnone">Decline</button>
                    <button type="button" class="btntwo">Accept</button>
                </div>
               
            </div>
        <OnlyFooter/>
           </>}
        </div>
        </div>
    )
}

export default Termpolicy
