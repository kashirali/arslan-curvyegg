
import './Blog.css';
import React,{useEffect} from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import downarrow from '../../assets/svg/Cross icon/Arrow upblue.svg'
import { Avatar,Pagination } from '@mui/material';
// import Pagination from "react-js-pagination";
import Header from '../../Components/Header/Header';
import Subform from '../../Components/Subform/Subform'
import Footer from '../../Components/Footer/Footer'
import MediaCard from '../../UI/MaterialCard/MaterialCard';
import Review from '../../Components/reviews/Review'
import sampleimg from '../../assets/sampleimg.png'
import sampleimground from '../../assets/svg/sampleround.png'

import sampleicon from '../../assets/svg/salvador.jpg'
import blogsearch from '../../assets/svg/Blogsearch.svg'
import Aos from 'aos';
function Blog() {
  useEffect(
    ()=>Aos.init({
        duration:2000,
        once:true
    }),[]
)
  
  return (
    <div>
      <Header/>
    <div className="container">
<div class="main_blog">
<h2 className="main_blog_heaed" id="blog_hd">BLOG</h2>
    <p class="blog_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
</div>
    
   
   <div id="med_inp">
  <div class="search_inp">
  
    <img src={blogsearch} width="20px"/>
  <input type="text" class="form-control" placeholder="Search" id="search-id"/>

  </div>
  <Dropdown>
  <Dropdown.Toggle variant="white" id="dropdown-basic">
    <span>All Category <img style={{transform:'rotate(-180deg)',marginLeft:'20px'}} src={downarrow} width="20px"/></span> 
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
  </div>
   
  <div  data-aos="fade-up" class="row blog_row" >
  <div class="col-md-6 col-sm-12 mobwidth">

  <MediaCard img={sampleimg} head="first card" text=" Lorem Ipsum is that it has a more-or-less normal distribution of letters"/>
  </div>
  <div class="col-md-6 col-sm-12 mobwidth">
  <MediaCard leftImg={true} img={sampleimg} head="first card" text="Lorem Ipsum is that it has a more-or-less " secText=" Lorem Ipsum is that it has a more-or-less normal distribution of letters normal distribution of letters"/>
  <div style={{marginBottom:'35px'}}></div>
  <MediaCard leftImg={true} img={sampleimg} head="first card" text="Lorem Ipsum is that it has a more-or-less" secText=" Lorem Ipsum is that it has a more-or-less normal distribution of letters normal distribution of letters"/>
</div> 
  

</div>

  <div  data-aos="fade-up" className="tester">
  <div className="blogthreecards">
  <MediaCard threecard={true} img={sampleimground} head="first card" text="this is a text of first card" secText=" Lorem Ipsum is that it has a more-or-less normal distribution of letters"/>
  <MediaCard threecard={true} img={sampleimground} head="first card" text="this is a text of first card" secText=" Lorem Ipsum is that it has a more-or-less normal distribution of letters"/>
  <MediaCard threecard={true} img={sampleimground} head="first card" text="this is a text of first card" secText=" Lorem Ipsum is that it has a more-or-less normal distribution of letters"/>

  </div>
</div>
 <section  data-aos="fade-up" className="blog_section_3">
    <div className="blog_nav">
    <ul>
  <li><a className='blog_nav_active' href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a  href="#about">About</a></li>
</ul>
    </div>
  <div class="_flex-div">

  <div class="blog-flex-div"> 
  <div className="blog-left-1">

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.sed do eiusmod </p>
  </div>
  <div className="blog-right"> 
  <div style={{borderRadius:"10px",overflow:'hidden',width:'fit-content'}}>
          <img src={sampleimg} />
          </div>
</div >
<div className="blog-left-2">
  <div class="avatar_div">
    <div style={{borderRadius:'16px',padding:'5px',background:'lightgrey'}}>
  <Avatar alt="Remy Sharp" src={sampleicon} style={{borderRadius:'15px'}}/>
    </div>
<h6 id="hd">consectetur adipiscing elit</h6>
  </div>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.sed do eiusmod tempor incididunt ut <span style={{display:'block',color:'#446beb',fontWeight:'bold',marginTop:'20px',marginLeft:0}}>More...</span></p>

</div>
</div>


</div>
 </section>


  




<div  data-aos="fade-up" class="div_hd">
<h1>Lorem ipsum dollar</h1>
</div>


<div  data-aos="fade-up" class="row">
<div class="col-md-6 col-sm-12 overflowimg"> 
<div style={{borderRadius:"10px",overflow:'hidden',width:'fit-content'}}>
          <img src={sampleimg} />
          </div>
<div className='div_hd_inner parthideonmob'>
<p style={{marginTop:'20px'}}><b>Lorem ipsum dolor sit amet, consectetur adipiscing</b></p>
<div class="avatar_div">
<div style={{borderRadius:'16px',padding:'5px',background:'lightgrey',marginRight:'10px'}}>
  <Avatar alt="Remy Sharp" src={sampleicon} style={{borderRadius:'15px'}}/>
    </div><div style={{borderRadius:'16px',padding:'5px',background:'lightgrey'}}>
  <Avatar alt="Remy Sharp" src={sampleicon} style={{borderRadius:'15px'}}/>
    </div>
<h6 id="hd">consectetur adipiscing elit</h6>
  </div>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

</div>
</div>
<div class="col-md-6 col-sm-12"> 
<div className='div_hd_inner'>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
<div class="avatar_div">
  
<div style={{borderRadius:'16px',padding:'5px',background:'lightgrey'}}>
  <Avatar alt="Remy Sharp" src={sampleicon} style={{borderRadius:'15px'}}/>
    </div>
  
<h6 id="hd">consectetur adipiscing elit</h6>
  </div>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.sed do eiusmod tempor incididunt ut</p>

</div>
<div className='div_hd_inner marginremove' style={{marginTop:'45px'}}>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaassjk</p>
  
<div class="avatar_div">
<div style={{borderRadius:'16px',padding:'5px',background:'lightgrey'}}>
  <Avatar alt="Remy Sharp" src={sampleicon} style={{borderRadius:'15px'}}/>
    </div>
<h6 id="hd">consectetur adipiscing elit</h6>
  </div>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.dolore magna aliqua.sed do eiusmod tempor</p>

</div>

<div className='div_hd_inner partshowonmob'>
<p style={{marginTop:'20px'}}><b>Lorem ipsum dolor sit amet, consectetur adipiscing</b></p>
<div class="avatar_div">
<div style={{borderRadius:'16px',padding:'5px',background:'lightgrey',marginRight:'10px'}}>
  <Avatar alt="Remy Sharp" src={sampleicon} style={{borderRadius:'15px'}}/>
    </div><div style={{borderRadius:'16px',padding:'5px',background:'lightgrey'}}>
  <Avatar alt="Remy Sharp" src={sampleicon} style={{borderRadius:'15px'}}/>
    </div>
<h6 id="hd">consectetur adipiscing elit</h6>
  </div>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

</div>
</div>

</div>

</div>


<div  data-aos="fade-up" class="p_inp">
  <div className="container">
      <div className="row">
          <div className="col-md-6 col-sm-12">
          <div class="inp_para">
<p id="med_par">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div>
          </div>
        <div className="col-md-6 col-sm-12">
        <div class="inp_btn">

<input className='inputfoucsremove' type="text" id="email_inp" placeholder="your company email"/>
<button id="submit_btn">submit</button>  

</div>
        </div>
      </div>
  </div>


</div>
<div className="container">
  <section  data-aos="fade-up" className="blog_section_6">
      <div class="supp_hd">
      <h2>Lorem ipsum dolor sit amet sit amet</h2>
      <div class="avatar_div">
      <div style={{borderRadius:'16px',padding:'5px',background:'lightgrey'}}>
  <Avatar alt="Remy Sharp" src={sampleicon} style={{borderRadius:'15px'}}/>
    </div>
<h6 id="hd">Curvy Egg</h6> <span className='bbadge'>Support</span>
  </div>
      <div className="section_6_separator">
        <div className="section_6_left">
          <div style={{borderRadius:"4px",overflow:'hidden',width:'fit-content'}}>
          <img src={sampleimg} />
          </div>
        </div>
      
          
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,  Various versions have evolved over the years,  Various versions have evolved over the years,  Various versions have evolved over the years
        

      </div>
    </div>
    <div>
      
    </div>
  </section>

      <Review total = {2}/>

      <div>
      <div className='paginationmob' style={{display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'120px',clear:'both',}}>

      <Pagination count={4} variant="outlined" shape="rounded" />
      </div>
 
        {/* <Pagination
          activePage={1}
          itemsCountPerPage={10}
          totalItemsCount={16}
          pageRangeDisplayed={5}
          prevPageText={''}
          nextPageText={'next'}
          firstPageText={''}
          lastPageText={""}
        /> */}
      </div>
     
      </div>
      {/* <div className='mobmargin'></div> */}
 <Subform/>
            <Footer/>
</div>
   
  );
}

export default Blog;
