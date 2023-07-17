import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
mutation authenticate($credentials: AuthenticateInput!){
  authenticate(credentials: $credentials ) {
    accessToken
  }
}
`;

export const REVIEW = gql`
mutation Mutation($review: CreateReviewInput) {
  createReview(review: $review) {
    repository {
      id
    }
  }
}
`;