import { Handle, Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {
  return (
    <div style={{
      width: 220, 
      minHeight: 120, 
      border: '2px solid #8b5cf6',
      borderRadius: '10px',
      padding: '12px',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      position: 'relative'
    }}>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{
          top: '35%',
          width: '12px',
          height: '12px',
          background: '#8b5cf6',
          border: '2px solid #ffffff'
        }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{
          top: '65%',
          width: '12px',
          height: '12px',
          background: '#8b5cf6',
          border: '2px solid #ffffff'
        }}
      />
      <div style={{
        fontWeight: '600',
        marginBottom: '12px',
        color: '#8b5cf6',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        gap: '6px'
      }}>
        <span>🤖</span>
        <span>LLM Engine</span>
      </div>
      <div style={{fontSize: '12px', color: '#6b7280', lineHeight: '1.6'}}>
        <div style={{
          marginBottom: '8px',
          padding: '6px 8px',
          backgroundColor: '#f9fafb',
          borderRadius: '4px',
          fontWeight: '500'
        }}>
          <span>→ System</span>
        </div>
        <div style={{
          padding: '6px 8px',
          backgroundColor: '#f9fafb',
          borderRadius: '4px',
          fontWeight: '500'
        }}>
          <span>→ Prompt</span>
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
        style={{
          width: '12px',
          height: '12px',
          background: '#8b5cf6',
          border: '2px solid #ffffff'
        }}
      />
    </div>
  );
}
