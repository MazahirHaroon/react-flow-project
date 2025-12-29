import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  {
    id: '1',
    data: {
      label: 'Node 1',
    },
    position: { x: 0, y: 0 },
  },
  {
    id: '2',
    data: {
      label: 'Node 2',
    },
    position: { x: 200, y: 200 },
  },
];

const initialEdges = [
  {
    id: '1-2',
    source: '1',
    target: '2',
    animated: true,
  },
];

const Workflow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className='h-screen w-screen border-2 border-red-400'>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Workflow;
