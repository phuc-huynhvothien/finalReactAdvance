import React from 'react';
import { StyledButtonTransparent } from './ButtonTransparent.styled'
interface ButtonProps {
    children: React.ReactChild
    onClick?(e: React.MouseEvent<HTMLElement>): void
    active: string
    size?: string
    color?: string
    line?: string
    capitalize? :boolean
}
const ButtonTransparent: React.FC<ButtonProps> = ({ size, children, color, active, line ,capitalize }) => {

    return <>
        <StyledButtonTransparent size={size} color={color} line={line} capitalize={capitalize}>{children}</StyledButtonTransparent>
    </>
}
export default ButtonTransparent;