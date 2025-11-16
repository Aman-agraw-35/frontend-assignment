export const DraggableNode = ({ type, label }) => {
    const getNodeColor = () => {
      switch(type) {
        case 'customInput': return { base: '#10b981', hover: '#059669' };
        case 'customOutput': return { base: '#ef4444', hover: '#dc2626' };
        case 'llm': return { base: '#8b5cf6', hover: '#7c3aed' };
        case 'text': return { base: '#3b82f6', hover: '#2563eb' };
        default: return { base: '#6b7280', hover: '#4b5563' };
      }
    };

    const colors = getNodeColor();

    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{ 
          cursor: 'grab', 
          minWidth: '100px', 
          height: '60px',
          display: 'flex', 
          alignItems: 'center', 
          borderRadius: '8px',
          backgroundColor: colors.base,
          justifyContent: 'center', 
          flexDirection: 'column',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.2s ease',
          fontWeight: '500',
          border: '2px solid transparent'
        }} 
        draggable
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = colors.hover;
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
          e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = colors.base;
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
          e.target.style.borderColor = 'transparent';
        }}
      >
          <span style={{ color: '#ffffff', fontSize: '14px' }}>{label}</span>
      </div>
    );
  };
  