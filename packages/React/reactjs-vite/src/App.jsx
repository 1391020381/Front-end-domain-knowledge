import { Editor,Frame,Element } from '@craftjs/core'
import './App.css'
import { Alert,Layout } from 'antd'
import { SettingsPanel } from './components/SettingsPanel'
import { Button } from './components/user/Button'
const { Sider, Content } = Layout;
function App() {
  const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(50% - 8px)',
    maxWidth: 'calc(50% - 8px)',
  };
  const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#fff',
  };
  const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#fff',
  };
  return (
    <Layout style={layoutStyle}>
      <Alert message="Basic Page Editor" type="success" />
      <Editor
        resolver={{
          Button
        }}
      >
        {/* <Topbar/> */}
      <Content style={contentStyle}>
      <Frame>
        <Element 
          canvas
          is={'div'}
          
        >
          <Button text="click me" size='samll' type='primary'></Button>
        </Element>
      </Frame>
      </Content>
      <Sider style={siderStyle}>
      <SettingsPanel />
      </Sider>
      </Editor>
    </Layout>
  )
}

export default App
