import  React  from 'react'
import { useEditor } from '@craftjs/core'
import { Button, Card, Space } from 'antd';

export const SettingsPanel = () =>{
    const { actions,selected,isEnabled }  = useEditor((state,query)=>{
        const currentNodeId =  query.getEvent('selected').last();  
        let selected;
        if(currentNodeId){
            selected = {
                id:currentNodeId,
                name:state.nodes[currentNodeId].data.name,
                settings:
                    state.nodes[currentNodeId].related && 
                    state.nodes[currentNodeId].related.settings,
                    isDeletable: query.node(currentNodeId).isDeletable(),
            }
        }
        console.log('selected:',selected,'isEnabled:',state.options.enabled)
        return {
            selected,
            isEnabled:state.options.enabled
        }
    })

    return isEnabled && selected ?(
  
        <div>
            
            <div>
                {selected.settings && React.createElement(selected.settings)}
            </div>
            {/* <div>
                {selected.isDeletable?( <Button type='primary' onClick={
                   actions.delete(selected.id)
                }>Delete</Button> ):null}
            </div> */}
        </div>


    ):null

}