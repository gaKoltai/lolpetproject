import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CustomLink from './CustomLink'


const StyledNavTitle = styled.h1`
    
`

interface Props {
    
}

const NavTitle = (props: Props) => {
    return (
        <StyledNavTitle>
            <CustomLink to="/">KMS</CustomLink>
        </StyledNavTitle>
    )
}

export default NavTitle
