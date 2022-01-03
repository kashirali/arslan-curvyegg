import React, { useEffect,useState } from 'react'
import './review.css'

import sampleimg from '../../assets/svg/salvador.jpg'
import stars from '../../assets/svg/Stars.svg'
import downarrow from '../../assets/svg/Arrow Up.svg'
import { Avatar,Pagination } from '@mui/material';
import Aos from 'aos'
import { getIn } from 'formik'
const Review = (props)=>
{
    const [cssClass,setCssClass] = useState('reviewactive2')
    const [disableleft,setDisableLeft] = useState(false)
    const [disableRight,setDisableRight] = useState(false)
    const [classesArray,setClassesArray] = useState(['reviewactive1','reviewactive2','reviewactive3'])
    const [reviewData,setReviewData] = useState([{author: 'CurvyEgg', para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit per amet wakana fake lake the porla Lorem ipsum dolor sit amet, consectetur adipiscing elit per amet wakana fake lake the porla Lorem ipsum dolor sit amet, consectetur adipiscing elit per amet wakana fake lake the porla", designation: "owner - Small Business"},
    {author: 'CurvyEgg', para: "Lake take dolor sit kings, consectetur adipiscing elit per raka wakana fake lake the porla Lorem ipsum dolor sit amet, consectetur adipiscing elit per amet wakana fake lake the porla Lorem ipsum dolor sit amet, consectetur adipiscing elit per amet wakana fake lake the porla", designation: "slave"},{author: 'CurvyEgg', para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit per amet wakana fake lake the porla Lorem ipsum dolor sit amet, consectetur adipiscing elit per amet wakana fake lake the porla Lorem ipsum dolor sit amet, consectetur adipiscing elit per amet wakana fake lake the porla", designation: "owner - Small Business"}])
    const [activeReviewData,setActiveReviewData] = useState({author: 'CurvyEgg', para: "Lake take dolor sit kings, consectetur adipiscing elit per raka wakana fake lake the porla Lorem ipsum dolor sit amet, consectetur adipiscing elit per amet wakana fake lake the porla Lorem ipsum dolor sit amet, consectetur adipiscing elit per amet wakana fake lake the porla", designation: "slave"})
    const goNext = () => {
        let getIndex = classesArray.indexOf(cssClass) + 1;
        console.log(getIndex,'getindex')
        if(getIndex === (classesArray.length -1)){
           setActiveReviewData(reviewData[getIndex])

            setCssClass(classesArray[classesArray.length - 1])
            setDisableRight(true)
        }
        else if(getIndex < classesArray.length){
            setCssClass(classesArray[getIndex])
           setActiveReviewData(reviewData[getIndex])

        }
        if(getIndex !== classesArray.length - 1){
            setDisableRight(false)
        }
        if(getIndex > 0){
            setDisableLeft(false)
        }
    }
    
    const goPrev = () => {
        let getIndex = classesArray.indexOf(cssClass) - 1;
        if(getIndex === 0){
            setCssClass(classesArray[getIndex])
           setActiveReviewData(reviewData[getIndex])

            setDisableLeft(true)
            setDisableRight(false)
        }
        else if(getIndex > 0){
            setCssClass(classesArray[getIndex])
           setActiveReviewData(reviewData[getIndex])


        }
        if(getIndex !== 0){
            setDisableLeft(false)
        }
        if(getIndex < classesArray.length){
            setDisableRight(false)
        }
    }
   useEffect(()=>{
    Aos.init({
        duration:2000,
        once:true
    })
})  
    console.log(disableRight,'disableRight')
    console.log(activeReviewData,'disableleft')
        return(
             <>    
         <div className='reviewmarginmob'  data-aos="fade-up" style={{marginBottom:'120px'}}>
                 <div className="main_hold">
                     <div class="review_card">
                         <div className="review_data">
                             <div className = "picture">
                                 <div className = "container_img">
                                 <div style={{borderRadius:'16px',width:'70px',height:'70px',padding:'5px',background:'lightgrey',marginRight:"10px"}}>
  
                                 <Avatar alt="Remy Sharp" src={sampleimg} style={{width:'60px',height:'60px',borderRadius:'15px'}}/>
     </div>
                                 </div>
                             </div>
                             <div className = "author">
                                 <span className = "auth_head">Author: </span><span className = "auth_name">{activeReviewData.author}</span>
                             </div>
                             <div className = "para">
                                 <p>
                                     {activeReviewData.para}
                                 </p>
                             </div>
                         </div>
                     </div>
                     <div>
                     <div class="card_data" >
                        
                         <div className = "image">
                             <div className = "container_img">
                             <div style={{borderRadius:'16px',padding:'5px',background:'lightgrey'}}>
   <Avatar alt="Remy Sharp" src={sampleimg} style={{borderRadius:'15px'}}/>
     </div>
 </div>
                         </div>
                     <div>
                         <div className = "auth">
                             <span >{activeReviewData.author}</span><br />
                             <span >{activeReviewData.designation}</span>
                         </div>
                         <div className = "rats"><img src={stars} width="150px"/></div>    
                         </div>
                     </div>
                     <div className = "ratched">
                     <button className="case case1" onClick={goPrev}><img src={downarrow} width="20px" height="10px"/></button>
                     <button className="case case2" onClick={goNext}><img src={downarrow} width="20px" height="10px"/></button>
                     </div>
                     <div className = "sigh"><span className="sp">Read More Testomials</span></div>
                     </div>
                    
                 </div>
             </div> 
            
            <div className='reviewmobcomponent' style={{overflowX:'hidden'}}>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',border:'1px solid lightgrey',boxShadow:'0px 0px 20px 1px rgba(0,0,0,0.1)',marginBottom:'30px',padding:'1rem 0.5rem 0.2rem 0.7rem'}}>
                    <div className='img-avatar'>
                        <div style={{borderRadius:'16px',padding:'5px',background:'lightgrey',marginRight:'25px'}}>
  <Avatar alt="Remy Sharp" src={sampleimg} style={{borderRadius:'15px'}}/>
    </div>
                    </div>
                    <div className='review-card-text-top'>
                        <h2>Author:<span>{activeReviewData.author}</span></h2>
                        <p>{activeReviewData.para}</p>
                    </div>
                </div>
                <div style={{display:'flex'}}> 
                    <div className={`reviewshortcard1 ${cssClass}`}>
                    <div className='img-avatar'>
                        <div style={{borderRadius:'16px',padding:'5px',background:'lightgrey',marginRight:'15px'}}>
  <Avatar alt="Remy Sharp" src={sampleimg} style={{borderRadius:'15px'}}/>
    </div>
                    </div>
                    <div className='review-card-text'>
                        <p>CurvyEgg</p>
                        <p>Owner small bussiness</p>
                        <div className = "rats"><img src={stars} width="150px"/></div>    
                        
                        </div>
                    </div>
                    <div className={`reviewshortcard2 ${cssClass}`}>
                    <div className='img-avatar'>
                        <div style={{borderRadius:'16px',padding:'5px',background:'lightgrey',marginRight:'15px'}}>
  <Avatar alt="Remy Sharp" src={sampleimg} style={{borderRadius:'15px'}}/>
    </div>
                    </div>
                    <div className='review-card-text'>
                        <p>CurvyEgg</p>
                        <p>Owner small bussiness</p>
                        <div className = "rats"><img src={stars} width="150px"/></div>    
                        
                        </div>
                    </div>
                    <div className={`reviewshortcard3 ${cssClass}`}>
                    <div className='img-avatar'>
                        <div style={{borderRadius:'16px',padding:'5px',background:'lightgrey',marginRight:'15px'}}>
  <Avatar alt="Remy Sharp" src={sampleimg} style={{borderRadius:'15px'}}/>
    </div>
                    </div>
                    <div className='review-card-text'>
                        <p>CurvyEgg</p>
                        <p>Owner small bussiness</p>
                        <div className = "rats"><img src={stars} width="150px"/></div>    
                        
                        </div>
                    </div>
                </div>
                <div className = "ratched">
                    {!disableleft && <button className="case case1" onClick={goPrev}><img src={downarrow} width="20px" height="10px"/></button>
                    }
                    {! disableRight && <button className="case case2" onClick={goNext}><img src={downarrow} width="20px" height="10px"/></button>
                   }
                         </div>
                    <div className = "sigh"><span className="sp">Read More Testomials</span></div>
                   
            </div>
            </>
        );
    
}


Review.defaultProps = {
    data: {
        arsla: {author: 'CurvyEgg', para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit per amet wakana fake lake the porla Lorem ipsum dolor sit amet, consectetur adipiscing elit per amet wakana fake lake the porla Lorem ipsum dolor sit amet, consectetur adipiscing elit per amet wakana fake lake the porla", designation: "owner - Small Business"},
        fake: {author: 'CurvyEgg', para: "Lake take dolor sit kings, consectetur adipiscing elit per raka wakana fake lake the porla Lorem ipsum dolor sit amet, consectetur adipiscing elit per amet wakana fake lake the porla Lorem ipsum dolor sit amet, consectetur adipiscing elit per amet wakana fake lake the porla", designation: "slave"}
    },
    total: 2
}
export default Review