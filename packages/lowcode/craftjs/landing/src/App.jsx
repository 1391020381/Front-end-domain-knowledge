import { Layout } from "antd";

const {  Sider, Content } = Layout;

const contentStyle = {
  color: "rgb(75, 75, 75)",
  backgroundColor: "#eee",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  with:'120px',
  backgroundColor: "#fff",
};

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "100%",
  maxWidth: "100%",
};
function App() {
  return (
    <Layout style={layoutStyle}>
        <Sider  style={siderStyle}>
          components-selected
        </Sider>
        <Content style={contentStyle}>canvas</Content>
        <Sider  style={siderStyle}>
          settingPaneling
        </Sider>
      </Layout>
  );
}

export default App;
