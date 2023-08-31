const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log("being dragged");
  };

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Here
      </div>
    </div>
  );
};

export default EventComponent;
