import { GraphQLClient, gql } from 'graphql-request'

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}`

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.ACCESS_TOKEN}`
  }
})

export async function getSample (slug) {
  const postQuery = gql`
    query getSample($slug: String!) {
      sampleCollection(where: {slug: $slug}) {
        items {
          title
          thumbnail {
            url
            width
            height
            title
            description
          }
          content {
            json
          }
          slug
          publishedDate
        }
      }
    }
  `
  return graphQLClient.request(postQuery, { slug })
}
