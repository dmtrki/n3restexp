export const inputableProps = () => ({
    name: {
        type: String,
        default: null,
    },
    modelValue: {
        type: [String, Number, Boolean, Function, Object, Array],
        default: null,
    },
    readonly: {
        type: Boolean,
        default: false,
    },
    required: {
        type: Boolean,
        default: false,
    },
    validateOnInput: {
        type: Boolean,
        default: true,
    },
    error: {
        type: String,
        default: '',
    },
    rules: {
        type: Array,
        default: () => [],
    },
})