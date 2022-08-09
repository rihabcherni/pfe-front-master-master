import React from 'react'
import { buildStyles } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function CirculairePourcentage({image  , percentage}) {
  var color="";
  if(percentage <=25){color="#10BC10"  //green
  }else if( percentage>25 && percentage<=50){color="#FFFF8A"   // yellow
  }else if( percentage>50 && percentage<=75){color="#F4BB44"   //orange
  }else if(percentage>75){ color="#FF2511"   // red
  }
  return (
    <CircularProgressbarWithChildren value={percentage}  strokeWidth={8} styles={buildStyles({pathColor:`${color}`, width:"20px" })}>
      <img style={{ width: '50%' }} src={image} alt="img" />
      <div style={{ fontSize: 14,color:`#FEF1E6` }}><strong>{percentage} %</strong></div>
    </CircularProgressbarWithChildren>
  )
}
