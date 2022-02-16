import {_pbf} from "../shared/componentsHelper"
import {boolProp} from "../types/props"

export interface StatePropsInterface {
    success: boolProp,
    warning: boolProp,
    error: boolProp,
    busy: boolProp
}

export const withStateProps = () => ({
    success: _pbf,
    warning: _pbf,
    error: _pbf,
    busy: _pbf,
})