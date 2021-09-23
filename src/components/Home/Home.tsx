import { Row, Radio } from "antd"
import { GeneratedDataProps } from "../../hooks/useGeneratedData"

export const Home = ({setSetting}: {setSetting: React.Dispatch<React.SetStateAction<GeneratedDataProps>>}) => {
  return (
    <>
    <h1>
      👋 Hi, everybody!
    </h1>
    <Row style={{marginTop: '3em'}} justify="center">
      <Radio.Group size="large" defaultValue="S" buttonStyle="solid">
        <Radio.Button value="S" key="small" onClick={() => setSetting({maxColumns: 10, maxRows: 100})}>
          🤏 Small
        </Radio.Button>
        <Radio.Button value="M" key="medium" onClick={() => setSetting({maxColumns: 10, maxRows: 1000})} >
          👌 Medium
        </Radio.Button>
        <Radio.Button value="L" key="large" onClick={() => setSetting({maxColumns: 100, maxRows: 1000})}>
          🐘  Large
        </Radio.Button>
      </Radio.Group>
      </Row>
      </>
  )
}