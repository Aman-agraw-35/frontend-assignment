import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    return (
        <div style={{ 
            padding: '20px 32px',
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #e5e7eb',
            boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
            flexShrink: 0
        }}>
            <h1 style={{ 
                margin: '0 0 8px 0', 
                fontSize: '22px', 
                fontWeight: '600',
                color: '#1f2937',
                letterSpacing: '-0.3px'
            }}>
                Pipeline Builder 
            </h1>
            <p style={{ 
                margin: '0 0 0 0', 
                fontSize: '12px', 
                color: '#6b7280' 
            }}>
                Drag and drop nodes in the canvas to build your pipeline
            </p>
            <p style={{ 
                margin: '0 0 4px 0', 
                fontSize: '12px', 
                color: '#9ca3af' 
            }}>
                Select and press backspace to delete nodes and connections
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
            </div>
        </div>
    );
};
