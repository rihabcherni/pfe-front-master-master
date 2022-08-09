import React from 'react'
import styled from 'styled-components';

const Badge = styled.div`
  display: inline-table;
  vertical-align: middle;
  border-radius: 50%;
  color: white;
  width: 30px;
  height: 30px;
`
const BadgeIconStyle = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`
export default function BadgeIcon(color, icon) {

  return (
    <Badge style={{ backgroundColor: {color}}}>
      <BadgeIconStyle>
        {icon}
      </BadgeIconStyle>
    </Badge>
  )
}
