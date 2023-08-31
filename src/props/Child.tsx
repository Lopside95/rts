interface ChildProps {
  color: string;
  // onClick: () => void;
  children?: React.ReactNode;
}

// export const Child = ({ color, onClick }: ChildProps) => {
//   return (
//     <div>
//       <h1>Hi there</h1>
//       {color}
//       <button onClick={onClick}>Click Here</button>
//     </div>
//   );
// };

// this approach to setting up a react component in typescript
// gives access to additional properties
export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  // onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      {/* <button onClick={onclick}>Click here</button> */}
    </div>
  );
};

// interface ChildProps {
//   color: string;
//   onClick: () => void;
//   children?: React.ReactNode;
// }
