import { Row, Radio } from "antd";
import { GeneratedDataProps } from "../../hooks/useGeneratedData";

export const Home = ({
  setSetting,
}: {
  setSetting: React.Dispatch<React.SetStateAction<GeneratedDataProps>>;
}) => {
  const emojiStyle: React.CSSProperties = { fontSize: "64px" };
  const buttonStyle: React.CSSProperties = {
    height: "auto",
    fontSize: "24px",
    padding: "12px",
  };
  return (
    <>
      <h1>👋 Hey, let's generate some data!</h1>
      <Row style={{ marginTop: "3em" }} justify="center">
        <Radio.Group size="large" defaultValue="S" buttonStyle="solid">
          <Radio.Button
            value="S"
            key="small"
            onClick={() => setSetting({ maxColumns: 10, maxRows: 100 })}
            style={buttonStyle}
          >
            <span style={emojiStyle}>🤏</span> <br /> Small <br /> 10 columns
            &times; 100 rows = 1K cells
          </Radio.Button>
          <Radio.Button
            value="M"
            key="medium"
            onClick={() => setSetting({ maxColumns: 10, maxRows: 1000 })}
            style={buttonStyle}
          >
            <span style={emojiStyle}>👌</span> <br />
            Medium <br /> 10 columns &times; 1 000 rows = 10K cells
          </Radio.Button>
          <Radio.Button
            value="L"
            key="large"
            onClick={() => setSetting({ maxColumns: 100, maxRows: 10000 })}
            style={buttonStyle}
          >
            <span style={emojiStyle}>🐘</span> <br /> Large <br /> 100 columns
            &times; 10 000 rows = 1M cells
          </Radio.Button>
        </Radio.Group>
      </Row>
    </>
  );
};
