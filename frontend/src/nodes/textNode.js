import { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import { useStore } from '../store';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const updateNodeField = useStore((state) => state.updateNodeField);

  useEffect(() => {
    updateNodeField(id, 'text', currText);
  }, [currText, id, updateNodeField]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <div style={{
      width: 240, 
      minHeight: 120, 
      border: '2px solid #3b82f6',
      borderRadius: '10px',
      padding: '12px',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        fontWeight: '600',
        marginBottom: '12px',
        color: '#3b82f6',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        gap: '6px'
      }}>
        <span>📝</span>
        <span>Text</span>
      </div>
      <div>
        <label style={{display: 'flex', flexDirection: 'column', fontSize: '12px', color: '#374151'}}>
          <span style={{fontWeight: '500', marginBottom: '4px'}}>Content:</span>
          <textarea 
            value={currText} 
            onChange={handleTextChange}
            rows={3}
            style={{
              padding: '8px',
              borderRadius: '6px',
              border: '1px solid #d1d5db',
              fontSize: '13px',
              fontFamily: 'ui-monospace, monospace',
              resize: 'vertical',
              outline: 'none',
              transition: 'border-color 0.2s'
            }}
            onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
            onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
          />
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{
          width: '12px',
          height: '12px',
          background: '#3b82f6',
          border: '2px solid #ffffff'
        }}
      />
    </div>
  );
}
