import {gql} from "@urql/vue";

export default gql`
    query productCategories($parent_id: Int) {
        productCategories(
            parent_id: $parent_id
        ) {
            id
            uuid
            slug
            title
            parent_id
            thumb
            products_count
            children_count
        }
    }
`
