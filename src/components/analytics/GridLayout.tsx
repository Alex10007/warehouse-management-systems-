import React from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';

const ReactGridLayout = WidthProvider(RGL);

interface GridLayoutProps {
  children: React.ReactNode;
}

export function GridLayout({ children }: GridLayoutProps) {
  const layout = [
    { i: 'metrics', x: 0, y: 0, w: 12, h: 1 },
    { i: 'inventory', x: 0, y: 1, w: 6, h: 2 },
    { i: 'productivity', x: 6, y: 1, w: 6, h: 2 },
    { i: 'trends', x: 0, y: 3, w: 12, h: 2 },
  ];

  return (
    <ReactGridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={200}
      isDraggable={true}
      isResizable={true}
      margin={[16, 16]}
    >
      {children}
    </ReactGridLayout>
  );
}