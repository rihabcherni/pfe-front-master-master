import React from 'react'
import { Button, Grid,Icon, Header, Image, Segment } from 'semantic-ui-react'
import images from '../../assets/images/greys.jpg'

export default function Partenaires() {
  return (
    <Segment id='partenaires' style={{ padding: '10em 0em', height:"100vh" }} vertical>
        <p className='title-section' > Partenaires  </p>
        <Grid  container stackable textAlign='center' verticalAlign='middle'>
            <Grid.Row>        
                <p style={{ fontSize: '1.33em', textAlign:'left' }}>
                    Un grand merci à tous nos partenaires qui, par leur soutien sincère, rendent possible
                    la réalisation de ce RESCHOOL ECOLOGY grâce à leur précieuse collaboration.
                    Nous remercions la société X pour son importante contribution financière.</p>
            </Grid.Row>
            <Grid.Row  textAlign='center'>        
                <Grid.Column width={3}>
                    <Image bordered rounded src={images} />
                </Grid.Column>
                <Grid.Column width={3}>
                    <Image bordered rounded src={images} />
                </Grid.Column>
                <Grid.Column width={3}>
                    <Image bordered rounded src={images} />
                </Grid.Column>
                <Grid.Column width={3}>
                    <Image bordered rounded src={images} />
                </Grid.Column>
                <Grid.Column width={3}>
                    <Image bordered rounded src={images} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>  )
}
