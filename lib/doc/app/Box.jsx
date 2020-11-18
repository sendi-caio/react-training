import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  background-color: blue;
`

function Box(props) {
  const { children } = props
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Box
