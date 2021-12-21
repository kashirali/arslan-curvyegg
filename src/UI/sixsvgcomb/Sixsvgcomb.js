import React from 'react'
import cpanel from '../../assets/svg/cpanel-seeklogo.com.svg'
import drupal from '../../assets/svg/drupal.svg'
import joomla from '../../assets/svg/joomla-seeklogo.com.svg'
import magento from '../../assets/svg/magento-seeklogo.com.svg'
import shopify from '../../assets/svg/shopify-seeklogo.com.svg'
import wordpress from '../../assets/svg/wordpress-icon-seeklogo.com.svg'


import './sixsvbcomb.css'

const Sixsvgcomb = (props)=>{

    return(
        <div className='sixsvgcomb_main'>
            <img src={cpanel} />
            <img src={drupal} />
            <img src={joomla}/>
            <img src={magento} />
            <img src={shopify}/>
            <img src={wordpress}/>
        </div>
    );
}
export default Sixsvgcomb