import * as React from 'react';

export const Alert: React.FC<{ message: string }> = (props) => {
  const { message } = props;
  return (
    <div style={{ backgroundColor: 'green', color: '#fff', padding: '1em' }}>
      {message}
    </div>
  );
};

export default Alert;
