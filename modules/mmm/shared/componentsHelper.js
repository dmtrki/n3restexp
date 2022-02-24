const _ps = {
    type: String,
    default: ''
}

const _pbf = {
    type: Boolean,
    default: false
}

const _pbt = {
    type: Boolean,
    default: true
}

const _themeProps = {
    theme: {
        type: [String, Boolean],
        default: false
    },
    primary: _pbf,
    secondary: _pbf,
    accent: _pbf,
    link: _pbf,
    info: _pbf,
}

const _stateProps = {
    success: _pbf,
    warning: _pbf,
    error: _pbf,
}

const _sizeProps = {
    size: {
        type: [String, Boolean],
        default: false
    },
    small: _pbf,
    large: _pbf,
    xsmall: _pbf,
    smallest: _pbf,
    xlarge: _pbf,
}

const _axisOffsetProps = {
    offsetY: {
        type: Number,
        default: 0
    },
    offsetX: {
        type: Number,
        default: 0
    }
}

const _styleProps = {
    ..._themeProps,
    ..._stateProps,
    ..._sizeProps,
    ..._axisOffsetProps
}

export {
    _pbf,
    _pbt,
    _ps,
    _themeProps,
    _stateProps,
    _sizeProps,
    _axisOffsetProps,
    _styleProps
}
