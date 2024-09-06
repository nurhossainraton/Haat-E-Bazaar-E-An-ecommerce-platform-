import React from 'react'
import { Box, styled,Grid } from '@mui/material'
import { imageURL } from '../../Constants/data'


const Component = styled(Grid)`
        margin-top: 10px;
        background: #ffffff;
`
const MideSection = () => {
  return (

    <Component lg={12} sm={12} md={12} xs={12} container>
      {imageURL && imageURL.map(image => (
    <Grid item lg={4} sm={12} md={4} xs={12}>
    <img src={image} alt="midsection" style={{ width: '100%', marginBottom: 20 }} />
    </Grid>
))}


    </Component>
  )
}

export default MideSection