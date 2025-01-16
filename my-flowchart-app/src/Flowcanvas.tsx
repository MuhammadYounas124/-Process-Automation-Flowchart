import 'admin-lte/dist/css/adminlte.min.css';
import ReactFlow , {
    Background,
    Controls,
    Edge,
    MiniMap,
    addEdge,
    useEdgesState,
    useNodesState,

} from 'react-flow-renderer';

const initialNodes = [
    {id: '1', type:'input', data: {label:'start'}, position: {x:250, y:0}},
    {id: '2', type:'output', data:{label:'end'}, position: {x:250, y:400}},
];

const initialEdges: Edge<any>[] = [];
 
const FlowCanvas = () => {

    const [nodes,_setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = (params: any) => setEdges((eds) => addEdge(params, eds));


     return (
        <div style={{height :'100vh', width:'100%'}}>
        <ReactFlow
         nodes={nodes}
         onNodesChange={onNodesChange}
         edges={edges}
         onEdgesChange={onEdgesChange}
         onConnect={onConnect}
         fitView
        >
            <Background/>
            <Controls/>
            <MiniMap/>
        </ReactFlow>
        </div>
     );
}

export  default FlowCanvas;
