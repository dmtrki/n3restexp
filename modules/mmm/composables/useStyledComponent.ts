import {StatePropsInterface, withStateProps} from "./withStateProps"
import {SizePropsInterface, withSizeProps} from './withSizeProps'
import {ThemePropsInterface, withThemeProps} from './withThemeProps'
import {useMmm} from './useMmm'

export interface styledComponentOptions {
    classBase: string,
    targetProps: object
}

export const useStyledComponent = (options: styledComponentOptions) => {
    const {fixpre} = useMmm()

    const {classBase, targetProps} = options

    const props = defineProps({
        ...withThemeProps(),
        ...withSizeProps(),
        ...withStateProps(),
        ...targetProps
    })

    const
        classRoot = computed(() => fixpre(classBase) + classBase),
        themed = computed(() => {
            if (props.theme) return props.theme

            let theme
            if (props.info) theme = 'info'
            if (props.primary) theme = 'primary'
            if (props.secondary) theme = 'secondary'
            if (props.accent) theme = 'accent'
            if (props.link) theme = 'link'

            if (props.outline) return theme + 'Outline'
            return theme ?? ''
        }),
        sized = computed(() => {
            if (props.size) return props.size
            if (props.small) return 'small'
            if (props.xsmall) return 'xsmall'
            if (props.smallest) return 'smallest'
            if (props.large) return 'large'
            if (props.xlarge) return 'xlarge'
            return ''
        }),
        stated = computed(() => {
            if (props.success) return 'success'
            if (props.warning) return 'warning'
            if (props.error) return 'error'
        }),
        styledClasses = computed(() => {
            let classList = [classBase]
            classList.push(`${classBase}--${sized.value}`)
            if (stated.value) classList.push(`is-${stated.value}`)
            return classList
        })

    return {
        props,
        classRoot,
        styledClasses,
        themed
    }
}