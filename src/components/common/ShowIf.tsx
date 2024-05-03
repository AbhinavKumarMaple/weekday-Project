import { ReactNode } from "react";

type ShowIfProps = {
  show: boolean;
  children: ReactNode;
};

const ShowIf: React.FC<ShowIfProps> = ({ show, children }) => {
  return <>{show && <div>{children}</div>} </>;
};

export default ShowIf;
