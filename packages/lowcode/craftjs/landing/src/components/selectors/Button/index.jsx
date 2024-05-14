import { useNode, useEditor } from '@craftjs/core';

import { Button } from 'antd'

import { ButtonSettings } from './ButtonSettings';



export const CustomButton = ({
   text,
   size,
   type,
   ...props
}) => {
  const {
    connectors: { connect,drag }
  } = useNode();
  
  return (
    <Button ref={(ref)=>{connect(drag(ref))}}
        size={size}
        type={type}
        {...props}
    >{text}</Button>
  );
};

Text.craft = {
  displayName: 'Button',
  props: {
    size:"samll",
    type:"primary"
  },
  related: {
    toolbar: ButtonSettings,
  },
};
