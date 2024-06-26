import "./header.css";

interface headerofsectionProps {
  title: string;
  children?: React.ReactNode;
  smallDivStyle?: React.CSSProperties;
  style?: React.CSSProperties;
}

function headerOfSection(props: headerofsectionProps) {
  return (
    <div className="headerOfSection-container" style={props.style}>
      <div style={props.smallDivStyle}>
        <h2>{props.title}</h2>
        {props.children}
      </div>
      <hr />
    </div>
  );
}

export default headerOfSection;
