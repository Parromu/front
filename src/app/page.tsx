import axios from "axios";
import cheerio from "cheerio";

export interface MMADataType {
  ranking: number;
  img: string;
}

export const getMMAData = async (url: string): Promise<MMADataType[] | []> => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const body = $("li.item");
    let MMAData: MMADataType[] = [];
    body.map((i, item) => {
      MMAData[i] = {
        ranking: i + 1,
        img: $(item).find("a > div.thumb > span.img").attr("style") ?? "",
      };
    });
    return MMAData.length > 0 ? MMAData : [];
  } catch (e) {
    throw e;
  }
};

export default async function Home() {
  const ranking: MMADataType[] = await getMMAData(
    "https://www.melon.com/mma/result.htm"
  );
  console.log(ranking);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
