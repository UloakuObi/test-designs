interface ChildProps {
    id: string;
    label: string;
    isSelected: boolean;
    onButtonClick: (id: string) => void; // The "Callback" prop
  }
  
export const Child = ({ id, label, isSelected, onButtonClick }: ChildProps) => {
    return (
      <div className={`p-4 border ${isSelected ? 'border-blue-500' : 'border-gray-200'}`}>
        <span>{label}</span>
        <button 
          onClick={() => onButtonClick(id)} // Pass the ID back up
          className="ml-4 px-2 py-1 bg-black text-white rounded"
        >
          Select Me
        </button>
      </div>
    );
  };