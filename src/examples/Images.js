import React from 'react'
import {graphql, useStaticQuery} from "gatsby"
import img from '../images/image2.jpeg'
import Image from 'gatsby-image'

const getImages = graphql`
{
  fixed:file(relativePath: {eq: "image1.jpeg"}){
    childImageSharp{
      fixed{
       ...GatsbyImageSharpFixed
     }
    }
  }
  fluid:file(relativePath:{eq:"image2.jpeg"}){
    childImageSharp{
      fluid{
       ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
}

`

const Images = () => {
  const data = useStaticQuery(getImages) 
  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
        <img src={img} />
        <h2>Content</h2>
      </article>
      <article className="single-image">
        <h3>fixed image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed}/>
        <h2>Content</h2>
      </article>
      <article className="single-image">
        <h3>fluid image/svg</h3>
        <Image fluid={data.fixed.childImageSharp.fluid}/>
        <h2>Content</h2>
      </article>
    </section>
  )
}

export default Images

