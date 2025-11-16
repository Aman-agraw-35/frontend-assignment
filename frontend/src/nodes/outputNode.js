import { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import { useStore } from '../store';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');
  const updateNodeField = useStore((state) => state.updateNodeField);

  useEffect(() => {
    updateNodeField(id, 'outputName', currName);
  }, [currName, id, updateNodeField]);

  useEffect(() => {
    updateNodeField(id, 'outputType', outputType);
  }, [outputType, id, updateNodeField]);

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <div style={{
      width: 220, 
      minHeight: 130, 
      border: '2px solid #ef4444',
      borderRadius: '10px',
      padding: '12px',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
        style={{
          width: '12px',
          height: '12px',
          background: '#ef4444',
          border: '2px solid #ffffff'
        }}
      />
      <div style={{
        fontWeight: '600',
        marginBottom: '12px',
        color: '#ef4444',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        gap: '6px'
      }}>
        <span>📤</span>
        <span>Output</span>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <label style={{display: 'flex', flexDirection: 'column', fontSize: '12px', color: '#374151'}}>
          <span style={{fontWeight: '500', marginBottom: '4px'}}>Name:</span>
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange}
            style={{
              padding: '6px 8px',
              borderRadius: '6px',
              border: '1px solid #d1d5db',
              fontSize: '13px',
              outline: 'none',
              transition: 'border-color 0.2s'
            }}
            onFocus={(e) => e.target.style.borderColor = '#ef4444'}
            onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
          />
        </label>
        <label style={{display: 'flex', flexDirection: 'column', fontSize: '12px', color: '#374151'}}>
          <span style={{fontWeight: '500', marginBottom: '4px'}}>Type:</span>
          <select 
            value={outputType} 
            onChange={handleTypeChange}
            style={{
              padding: '6px 8px',
              borderRadius: '6px',
              border: '1px solid #d1d5db',
              fontSize: '13px',
              outline: 'none',
              backgroundColor: '#ffffff',
              cursor: 'pointer'
            }}
          >
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </label>
      </div>
    </div>
  );
}
