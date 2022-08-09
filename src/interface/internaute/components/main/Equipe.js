import React from 'react'
import { Button, Grid,Icon, Header, Image, Segment } from 'semantic-ui-react'
import images from '../../assets/images/greys.jpg'

export default function Equipe() {
  return (
    <Segment id='equipe' style={{ padding: '10em 0em', height:"100vh" }} vertical>
        <p className='title-section' > Equipe  </p>
        <Grid  container stackable textAlign='middle' verticalAlign='middle'>
            <Grid.Row>        
                <p style={{ fontSize: '1.33em', textAlign:'left' }}>
                    Un grand merci à tous nos Equipe qui rendent possible
                    la réalisation de ce projet RESCHOOL ECOLOGY.</p>
            </Grid.Row>
            <Grid.Row  textAlign='middle'>        
                <Grid.Column width={4}>
                    <Image bordered rounded size='meduim' src={images} />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Image bordered rounded size='meduim' src={images} />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Image bordered rounded size='meduim' src={images} />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Image bordered rounded size='meduim' src={images} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>  )
}
