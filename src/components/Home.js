import React, { Component } from 'react'
import styled from 'styled-components'
import { Navbar } from './Navbar'

export default class Home extends Component {
    render() {
        return (
            <HomeContainer>
                <Navbar/>
            </HomeContainer>
        )
    }
}

const HomeContainer = styled.div `
    background-color: red;
    height: 100vh;
`