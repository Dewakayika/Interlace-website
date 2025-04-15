const VisaItem = ({ title, time, progress, note, color }) => {
    const progressWidth = {
      "1/6": "w-1/6",
      "1/4": "w-1/4",
      "1/3": "w-1/3",
      "1/2": "w-1/2",
      "2/3": "w-2/3",
      "3/4": "w-3/4",
      "full": "w-full",
    };
  
    const colorClass = {
      green: "bg-green-500",
      blue: "bg-blue-500",
      orange: "bg-orange-500",
      purple: "bg-purple-500",
    };
  
    return (
      <div>
        <div className="flex justify-between mb-2">
          <span className="font-medium">{title}</span>
          <span>{time}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className={`${colorClass[color]} h-2.5 rounded-full ${progressWidth[progress]}`}></div>
        </div>
        <p className="text-xs text-gray-500 mt-1">{note}</p>
      </div>
    );
  };

  export default VisaItem;
  