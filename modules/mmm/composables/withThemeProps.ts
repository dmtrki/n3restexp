import {_pbf, _ps} from "../shared/componentsHelper"
import {boolProp, stringProp} from "../types/props"

export interface ThemePropsInterface {
    theme: stringProp,
    primary: boolProp,
    secondary: boolProp,
    accent: boolProp,
    link: boolProp,
    info: boolProp,
    outline: boolProp
}

export const withThemeProps = () => ({
    theme: _ps,
    primary: _pbf,
    secondary: _pbf,
    accent: _pbf,
    link: _pbf,
    info: _pbf,
    outline: _pbf
})