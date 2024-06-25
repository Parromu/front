import axios from "axios";

export default async function Billboard() {
  return <></>;
}

export async function fetchChartData() {
  const { data: BillboardHot100 } = await axios.get(
    "https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-hot-100/recent.json"
  );
  const { data: Billboard200 } = await axios.get(
    "https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-200/recent.json"
  );
  const { data: BillboardGlobal200 } = await axios.get(
    "https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-global-200/recent.json"
  );
  return { BillboardHot100, Billboard200, BillboardGlobal200 };
}
