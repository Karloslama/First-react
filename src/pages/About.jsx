import React from 'react'
import { Helmet } from 'react-helmet'
import IncrementDecrement from '../hooks/IncrementDecrement'
import Show from '../context/Show'

const About = () => {
  return (
    <>
    <Helmet>
        <title>About</title>
        <meta name="description" content="Ecommerce React" />
      </Helmet>
    <IncrementDecrement/>
    <Show/>
    </>
  )
}

export default About