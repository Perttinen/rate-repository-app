import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          description
          forksCount
          ownerAvatarUrl
          fullName
          language
          stargazersCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`;