import { DragEvent } from 'react';

const Toolbox = () => {
  const onDragStart = (event: DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div style={{ padding: '10px', border: '1px solid #ddd', width: '200px' }}>
      <h4>ToolBox</h4>
      <div draggable onDragStart={(event) => onDragStart(event, 'input')}>Start Node</div>
      <div draggable onDragStart={(event) => onDragStart(event, 'default')}>Process Node</div>
      <div draggable onDragStart={(event) => onDragStart(event, 'decision')}>Decision Node</div>
      <div draggable onDragStart={(event) => onDragStart(event, 'output')}>End Node</div>
    </div>
  );
};

export default Toolbox;

