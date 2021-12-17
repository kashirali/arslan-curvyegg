import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './materialcard.css'
export default function MediaCard(props) {
  let blogcartstyle = '';
  let blogcardheight = '';

  if(props.threecard){
    blogcardheight = '260'
  }
  
  else if(props.leftImg){
    blogcardheight = '210'
  }
  else {
    blogcardheight = '327'
  }


  if(props.threecard){
    blogcartstyle={
      width:'550px !important',
      boxShadow:'none'
    }
  }
  else if(props.leftImg){
    blogcartstyle={
      maxWidth: 550,
      display:'flex',
      boxShadow:'4px 4px 21px 3px rgba(94,89,89,0.5)',
      alignItems:'stretch'
    }
  }
  else {
    blogcartstyle = {
      maxWidth: 550 ,
      boxShadow:'4px 4px 21px 3px rgba(94,89,89,0.5)'
    }
  }
  console.log(blogcartstyle)
  return (
    <Card sx={blogcartstyle}>
      <div>

      <CardMedia
        component="img"
        // width = '100'
        height = '100%'
        image={props.img}
        alt="green iguana"
      />
      </div>
      
      <CardContent>
        <Typography className='blog_card_head' gutterBottom variant="h5" component="div">
         {props.head}
        </Typography>
        {!props.threecard && <Typography className='blog_card_para' variant="body2" color="text.secondary">
          {props.text}
        </Typography>}
        {props.leftImg || props.threecard? <Typography className='blog_card_text' variant="body2" color="text.secondary">
          {props.secText}
        </Typography>:null}
      </CardContent>
 
    </Card>
  );
}