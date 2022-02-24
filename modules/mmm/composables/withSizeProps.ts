import {_pbf, _ps} from "~/modules/mmm/shared/componentsHelper";
import {boolProp, stringProp} from "../types/props";

export interface SizePropsInterface {
    size: stringProp,
    small: boolProp,
    large: boolProp,
    xsmall: boolProp,
    smallest: boolProp,
    xlarge: boolProp
}

export const withSizeProps = (): SizePropsInterface => ({
    size: _ps,
    small: _pbf,
    large: _pbf,
    xsmall: _pbf,
    smallest: _pbf,
    xlarge: _pbf
})