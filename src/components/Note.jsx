import React, { forwardRef } from 'react';

const  Note = forwardRef (({content,initialPosition,id,handlePinedItem,...props},ref) =>  {
  return (
    <div ref={ref} style={{position:'absolute',left:`${initialPosition?.x}px`,top:`${initialPosition?.y}px`,  border: '1px solid #ededed',userSelect:'none',padding:'10px',width:'200px',cursor:'move',   backgroundColor:'#d4d484',  borderRadius: '5px',color: '#656363'}}{...props}><p style={{justifyContent:'center',alignItems:'center',gap:10,fontSize:15,display:'flex',fontWeight:500}}>
    <span onClick={()=>handlePinedItem(id)} style={{cursor:'pointer'}}>📌</span>{content}</p></div>
  )
})

export default Note;

