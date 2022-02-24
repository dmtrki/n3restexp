import {iterableProp, stringProp, boolProp} from "../types/props";

interface DynamicPropsInterface {
    dataset?: iterableProp,
    mobileOnly?: boolProp,
    desktopOnly?: boolProp,
    componentName?: stringProp
}

export const withDynamicProps = ():DynamicPropsInterface => ({
    dataset: {
        type: [Object, Array],
        default: () => {}
    },
    mobileOnly: {
        type: Boolean,
        default: false
    },
    desktopOnly: {
        type: Boolean,
        default: false
    },
    componentName: {
        type: String,
        default: ''
    }
})