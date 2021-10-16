import gql from "graphql-tag";

export const query = gql`{
    continents {
      code
      name
      countries {
        code
        name
        native
        phone
        continent {
          code
          name
        }
        capital
        currency
        languages {
          code
          name
          native
          rtl
        }
        emoji
        emojiU
        states {
          code
          name
        }
      }
    }
  }`