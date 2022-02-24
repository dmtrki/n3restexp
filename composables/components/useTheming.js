import { _themeProps, _stateProps, _sizeProps, _axisOffsetProps } from '~/modules/mmm/shared/componentsHelper'

export function useTheming(classBase, props) {
    const classPrefix = 'mmm'

    const classRoot = computed(() => classPrefix + classBase),
        theme = computed(() => {
            if (props.theme) return props.theme
            if (props.primary) return 'primary'
            if (props.secondary) return 'secondary'
            if (props.accent) return 'accent'
            if (props.info) return 'info'
            if (props.link) return 'link'
            return 'default'
        }),
        size = computed(() => {
            if (props.size) return props.size
            if (props.small) return 'small'
            if (props.xsmall) return 'xsmall'
            if (props.smallest) return 'smallest'
            if (props.large) return 'large'
            if (props.xlarge) return 'xlarge'
            return 'medium'
        }),
        state = computed(() => {
            if (props.success) return 'success'
            if (props.warning) return 'warning'
            if (props.error) return 'error'
        }),
        themingClasses = computed(() => {
            let classList = [classBase]
            classList.push(`${classBase}--${size.value}`)
            if (!props.outline) classList.push(`${classBase}--${theme.value}`)
            if (state.value) classList.push(`is-${state.value}`)
            if (props.offsetX !== 0) classList.push(`${classBase}--offsetX_${props.offsetX}`)
            if (props.offsetY !== 0) classList.push(`${classBase}--offsetY_${props.offsetY}`)
            return classList
        })

    return {
        classRoot,
        theme,
        size,
        state,
        themingClasses
    }
}
