import React from 'react'
import ReactDOM from 'react-dom'
import Intro from './Intro'
import About from './About'
import Interest from './Interest'
import Social from './Social'

function App(){
    return (
        <>
            <div className='app-con'>
                <Intro />
                <About />
                <Interest />
                <Social/>
            </div>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))