
import {Typography, Paper, Grid} from '@material-ui/core';

import { Toolbox } from './components/Toolbox';
import { SettingsPanel } from './components/SettingsPanel';
import { Topbar } from './components/Topbar';

import { Container } from './components/user/Container';
import { Button } from './components/user/Button';
import { Card } from './components/user/Card';
import { Text } from './components/user/Text';

function App() {
 

  return (
     <div style={{margin:"0 auto",width:"800px" }}>
        <Typography variant='15' align='center'>A super simple page editor</Typography>
        <Grid container spacing={3} style={{ paddingTop:"10px"}}>
           <Topbar/>
           <Grid item xs>
            <Container padding={5} background="#eee">
              <Card></Card>
            </Container>
           </Grid>
           <Grid item xs={3}>
              <Paper>
                <Toolbox></Toolbox>
                <SettingsPanel></SettingsPanel>
              </Paper>
           </Grid>
        </Grid>
     </div>
  )
}

export default App
