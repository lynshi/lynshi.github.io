import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

export const maxWidthImage = graphql`
    fragment maxWidthImage on File {
        childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`

const Image = () => {
    const img = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "artechouse.jpg" }) {
                ...maxWidthImage
            }
        }
    `)

    return <Img fluid={img.placeholderImage.childImageSharp.fluid} />
}

export { Image }
