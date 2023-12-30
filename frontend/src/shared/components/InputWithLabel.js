import styled from '@emotion/styled'
import React from 'react'


const Wrapper = styled('div')({
   
    display : 'flex' ,
    justifyContent : 'center' ,
    flexDirection : 'column' ,
    width: '100%' 
      

});

const Label = styled('p')({
    color :'#b9bbbe',
    textTransform : 'uppercase' ,
    fontWeight : '600' ,
    fontSize : '16px'
})

const Input = styled('input')({
  
    flexGrow:1,
    height : '40px' ,
    border : '1px solid black' ,
    color:"#dcddde" ,
    background :'#35393f' ,
    margin :0,
    fontSize :'16px' ,
    padding : '0 5px' ,
     
})




export const InputWithLabel = (props) => {

    const {value , setValue , label ,type , placeHolder}=props;

    const handleValueChange=(event)=>{

        setValue(event.target.value)

    }

  return (
    <Wrapper>
        <Label>{label}</Label>
        <Input 
        value={value}
        type={type}
        placeholder={placeHolder}
        onChange={handleValueChange}
        />
    </Wrapper>
  )
}
