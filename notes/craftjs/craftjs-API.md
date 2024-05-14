#  Editor
* Creates the context that stores the editor state

## Props
1. resolver Map<String,React.ComponentType>
    - A map of User Components that will be used in the editor
2. enbaled? boolean
    - Optional if set to false all editing capabilities will be disabled


# Frame
* Frame defines the editable area in your page editor. It is rendered based on the editor`s internal state (i.e Nodes)

* const { connectors,setProp,...collected } = useNode(collector)