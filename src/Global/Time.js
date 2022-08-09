import React, { useState, useEffect } from 'react';
import './CSS/Time.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TodayIcon from '@mui/icons-material/Today';
export default function Time() {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 30000);
    }, []);
    return (
        <div className="time">
           <TodayIcon/>
            <p>
              {' '}
              {dateState.toLocaleDateString(undefined, {
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}
            </p>
            <AccessTimeIcon/>
            <p>
             {dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: false,
            })}
            </p>
        </div>
    );
}

