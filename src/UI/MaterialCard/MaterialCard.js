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
    blogcardheight = '215'
  }
  else {
    blogcardheight = '327'
  }


  if(props.threecard){
    blogcartstyle={
      width:'550px !important',
      boxShadow:'none',
     
     
    }
  }
  else if(props.leftImg){
    blogcartstyle={
      maxWidth: 550,
      display:'flex',
      boxShadow: " 0px 0px 12.2px 1px rgba(167, 167, 167, 0.15)",

      alignItems:'stretch'
    }
  }
  else {
    blogcartstyle = {
      maxWidth: 550 ,
      boxShadow: "0px 0px 12.2px 1px rgba(167, 167, 167, 0.15)"

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
      
      <CardContent style={props.threecard?{padding:'10px 0 0 0'}:null}>
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