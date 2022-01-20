import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
    query FirstQuery {
        site {
            info: siteMetadata {
                title
                description
                author
                simpleData
                complexData {
                    age
                    name
                }
                person {
                    name
                    age
                }
            }
        }
    }
`

const FetchData = () => {
    const { site: { info: { title } } } = useStaticQuery(getData);
    console.log(title);

    return (
        <div>
            <h1>Name: {title}</h1>
        </div>
    )
}

export default FetchData
