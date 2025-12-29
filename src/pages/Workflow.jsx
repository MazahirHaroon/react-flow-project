import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const nodes = [
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

const edges = [
  {
    id: '1-2',
    source: '1',
    target: '2',
    animated: true,
  },
];

const Workflow = () => {
  return (
    <div className='h-screen w-screen border-2 border-red-400'>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Workflow;
