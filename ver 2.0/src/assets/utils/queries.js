import gql from "graphql-tag";

export const READ_CONTRIES = gql`
    query readContries {
        allCountries {
            id
            name
            price
            done
            bought
            owner
        }
    }
`;
