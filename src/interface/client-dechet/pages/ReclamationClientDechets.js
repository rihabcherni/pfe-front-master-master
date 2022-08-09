import React from 'react'
import Camera from '../../../Global/images/camera.png'
import Message from '../../../Global/images/messager.png'
export default function ReclamationClientDechets() {
  return (
    <div style={{textAlign:"center"}}>
      <h1>Reclamation</h1>
      <h2>Passez vos réclamations</h2>
      <br/><br/>
      <div style={{display:'grid', gridTemplateColumns:'49% 49%', gap:"2%"}}>
        <div style={{padding:"30px", border:"2px dashed lightblue" , borderRadius:"20px"}}>
          <h3>Envoyez messages</h3>
          <img src={Message} alt='message icon' width='300px' height="300px"/>
        </div>
        <div style={{padding:"30px", border:"2px dashed lightblue" , borderRadius:"20px"}}>
          <h3>Prenez un photo</h3>
          <img src={Camera} alt="camera icon" width='300px' height="300px"/>
        </div>
      </div>
    </div>
  )
}
