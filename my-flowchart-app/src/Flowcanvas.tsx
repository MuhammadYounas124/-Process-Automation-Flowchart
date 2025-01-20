import 'admin-lte/dist/css/adminlte.min.css';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  useEdgesState,
  useNodesState,
  Node,
  Edge,
} from 'react-flow-renderer';

const initialNodes: Node[] = [
  { id: '1', type: 'input', data: { label: 'Start' }, position: { x: 250, y: 0 } },
  { id: '2', type: 'output', data: { label: 'End' }, position: { x: 250, y: 400 } },
];

const initialEdges: Edge[] = [];

interface FlowCanvasProps {
  onNodeClick: (event: any, node: Node) => void;
}

const FlowCanvas: React.FC<FlowCanvasProps> = ({ onNodeClick }) => {
  const [nodes, _setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = (params: any) => setEdges((eds) => addEdge(params, eds));

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick} // Ensure the prop is handled here
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};

export default FlowCanvas;
