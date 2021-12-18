import {gql} from "@urql/vue";

export default gql`
query getHomepage {
    page(slug: "home") {
        title
        extras
    }
    manufacturers (limit: 6) {
        uuid
        title
        slug
        thumb
    },
    manufacturersCount
}
`
