import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
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

export const GET_ME = gql`
  query Me {
    me {
      username
    }
  }
`;

export const GET_REPOSITORY = gql`
query Repository($repositoryId: ID!) {
  repository(id: $repositoryId) {
    description
    forksCount
    fullName
    language
    ownerAvatarUrl
    createdAt
    id
    name
    openIssuesCount
    ownerName
    ratingAverage
    reviewCount
    stargazersCount
    url
  }
}
`;

export const GET_REVIEWS = gql`
query Reviews($repositoryId: ID!) {
  repository(id: $repositoryId) {
    id
    fullName
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
}
`;
