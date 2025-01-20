import FlowCanvas from "./Flowcanvas";
import Propertypanel from "./Propertypanel";
import { useState } from "react";
import Toolbox from "./toolbox";

const App = () => {

    const [selectedNode, _setSelectedNode] = useState(null);
    return(

        <div style={{ display: 'flex', height: '100vh' }}>
        <Toolbox />
        <FlowCanvas />
        <Propertypanel selectednode={selectedNode} />
      </div>

    );
};

export default App;
