import React from 'react'
import ReactDOM from 'react-dom'
import Intro from './Intro'
import About from './About'
import Interest from './Interest'
import Social from './Social'

function App(){
    return (
        <>
            <Intro />
            <About />
            <Interest />
            <Social/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))