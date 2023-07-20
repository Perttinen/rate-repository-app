import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $first: Int, $after: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, first: $first, after: $after) {
      totalCount
      edges {       
        node {
          ownerName
          description
          forksCount
          ownerAvatarUrl
          fullName
          language
          stargazersCount
          reviewCount
          ratingAverage
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
`;

export const GET_ME = gql`
  query Me ($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            rating
            repositoryId
            text
            createdAt
            repository {
              url
              id
              fullName

            }
          }
        }
      }
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

export const ONE_REPOSITORY = gql`
query Repository($repositoryId: ID!, $first: Int, $after: String) {
  repository(id: $repositoryId) {
    id
    description
    fullName
    forksCount
    language
    ownerAvatarUrl
    createdAt
    ownerName
    ratingAverage
    reviewCount
    stargazersCount
    url
    reviews(first: $first, after: $after) {
      totalCount
      edges {
        node {
          id
          text
          rating
          createdAt
          repositoryId
          user {
            id
            username
          }
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
}
`

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
