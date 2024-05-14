import { useNode } from "@craftjs/core";
import { Button as AntdButton, Form, Select, Input } from "antd";

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
  const handleFormValuesChange = (changedValues, allVlaues) => {
    console.log("handleFormValuesChange:", changedValues, allVlaues)
    Object.keys(changedValues).forEach(key => {
      setProp((props) => {
        props[key] = changedValues[key]
      })
    })
  }

  return (
    <Form
      onValuesChange={handleFormValuesChange}
      name="basic"
      initialValues={{
        text: "click me",
        size: "default"
      }}
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}

      autoComplete="off"
    >
      <Form.Item
        label="按钮文案"
        name="text"
        rules={[
          // {
          //   required: true,
          //   message: "Please input your button text!",
          // },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="按钮大小"
        name="size"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Select
          style={{
            width: 120,
          }}
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
Button.craft = {
  props: ButtonDefaultProps,
  related: {
    settings: ButtonSettings,
  },
};