import {gql} from "@urql/vue";

export default gql`
    query {
        productCategories(
            parent_id: null
        ) {
            id
            uuid
            slug
            title
            thumb
            parent_id
        }
    }
`
