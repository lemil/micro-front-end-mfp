import { mount } from 'dashboard/DashboardApp';
import React, { useRef, useEffect } from 'react';

console.log('iniciando dashboard app');

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
