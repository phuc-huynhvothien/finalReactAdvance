import React from 'react';
import { IColorBox } from '../../../models/IColorBox';
import { StyledColorBox ,StyledColorBoxDefault} from './ColorBox.styled'
const ColorBox: React.FC<IColorBox> = (props) => {
    const defaultSize = 24;
    return <>
        {!props.reset? 
        <StyledColorBox reset={props.reset} color={props.colorText} size={props.size ? props.size : defaultSize} isCircle={props.isCircle} />
        :
        <StyledColorBoxDefault size={props.size ? props.size : defaultSize}>X</StyledColorBoxDefault>
    }
        
    </>
}
export default ColorBox;