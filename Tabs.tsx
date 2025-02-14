import React from 'react';

interface TabsProps {
  defaultValue: string;
  className?: string;
  children: React.ReactNode;
}

interface TabsTriggerProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ defaultValue, className = '', children }) => {
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        activeTab,
        setActiveTab,
      });
    }
    return child;
  });

  return (
    <div className={className}>
      {childrenWithProps}
    </div>
  );
};

export const TabsList: React.FC<{ children: React.ReactNode; className?: string; activeTab?: string; setActiveTab?: (value: string) => void }> = ({
  children,
  className = '',
  activeTab,
  setActiveTab,
}) => {
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        activeTab,
        setActiveTab,
      });
    }
    return child;
  });

  return (
    <div className={`inline-flex rounded-lg bg-gray-100 p-1 ${className}`}>
      {childrenWithProps}
    </div>
  );
};

export const TabsTrigger: React.FC<TabsTriggerProps & { activeTab?: string; setActiveTab?: (value: string) => void }> = ({
  value,
  className = '',
  children,
  activeTab,
  setActiveTab,
}) => {
  const isActive = activeTab === value;

  return (
    <button
      className={`px-4 py-2 rounded-md transition-all ${
        isActive
          ? 'bg-white text-[#00CF31] shadow-sm'
          : 'text-gray-600 hover:text-gray-900'
      } ${className}`}
      onClick={() => setActiveTab?.(value)}
      type="button"
    >
      {children}
    </button>
  );
};

export const TabsContent: React.FC<TabsContentProps & { activeTab?: string }> = ({
  value,
  children,
  activeTab,
}) => {
  if (activeTab !== value) return null;
  return <div>{children}</div>;
};
