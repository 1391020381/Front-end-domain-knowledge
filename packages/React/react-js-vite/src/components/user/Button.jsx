import { Button as MaterialButton } from "@material-ui/core";

import PropTypes from 'prop-types'

export const Button = ({size,variant,color,children})=>{
    return (
        <MaterialButton size={size} variant={variant} color={color}>
            {children}
        </MaterialButton>
    )
}

Button.propTypes = {
    size:PropTypes.string,
    variant:PropTypes.func,
    color:PropTypes.func,
    children:PropTypes.func
}