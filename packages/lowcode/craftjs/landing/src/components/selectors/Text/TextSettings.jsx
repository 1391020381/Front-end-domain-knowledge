
export const TextSettings = () => {
  const {
    actions: { setProp },
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
        label="Text文案"
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
    </Form>
  );
};

