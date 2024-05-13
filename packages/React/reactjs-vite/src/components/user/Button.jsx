import { useNode } from "@craftjs/core";
import { Button as AntdButton, Form, Select } from "antd";

export const Button = ({ size, type, text, onClick, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <AntdButton
      ref={(ref) => connect(drag(ref))}
      style={{ margin: "5px" }}
      size={size}
      type={type}
      onClick={onClick}
      {...props}
    >
      {text}
    </AntdButton>
  );
};

export const ButtonSettings = () => {
  const {
    actions: { setProp },
    // props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  const handleChange = (value) => {
    console.log("handleChange:", value);
    setProp((props) => {
      props.size = value;
    });
    // setProp((props) => (props.variant = e.target.value))
  };

  return (
    <Form
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
    >
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Select
          defaultValue="default"
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={[
            {
              value: "small",
              label: "small",
            },
            {
              value: "default",
              label: "default",
            },
            {
              value: "large",
              label: "large",
            },
          ]}
        />
      </Form.Item>
    </Form>
  );
};

export const ButtonDefaultProps = {
  size: "small",
  type: "primary",
  text: "Click me",
};
// const ButtonSettings2 = () =>{
//     return (
//         <div>ButtonSettings</div>
//     )
// }
Button.craft = {
  props: ButtonDefaultProps,
  related: {
    settings: ButtonSettings,
  },
};
