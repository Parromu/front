import axios from "axios";
import cheerio from "cheerio";

export interface MMADataType {
  category: string;
  artist: string;
  title: string;
  img: string;
}

export interface KHADataType {
  category: string;
  artist: string;
  title: string;
  img: string;
  netizenRecommendations: string;
  recommendationsList: string[];
}

export const getMMAData = async (url: string): Promise<MMADataType[]> => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const body = $("li.item");
    let MMAData: MMADataType[] = [];
    body.map((i, item) => {
      MMAData[i] = {
        category: $(item).find("a > div.info > div.category").text(),
        artist: $(item).find("a > div.info > div.artist").text(),
        title: $(item).find("a > div.info > div.title").text(),
        img: $(item).find("a > div.thumb > span.img").attr("style") ?? "",
      };
    });
    return MMAData.length > 0 ? MMAData : [];
  } catch (e) {
    throw e;
  }
};

export const getKHAData = async (url: string): Promise<KHADataType[]> => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const body = $("div.div_winner");
    let KHAData: KHADataType[] = [];
    body.map((i, item) => {
      KHAData[i] = {
        category: $(item).find("h3 > strong").text(),
        img: $(item).find("img.img_winner").attr("src") ?? "",
        artist: $(item).find("h2 > strong").text(),
        title: $(item).find("a > div.info > div.title").text(),
        netizenRecommendations: $(item).find("h5").text(),
        recommendationsList: $(item)
          .find("ul.nom_testimonial > li")
          .text()
          .split("."),
      };
    });
    return KHAData.length > 0 ? KHAData : [];
  } catch (e) {
    throw e;
  }
};

export default async function Home() {
  const MMAData: MMADataType[] = await getMMAData(
    "https://www.melon.com/mma/result.htm?mmaYear=2023" //2005~2023
  );
  const KHAData: KHADataType[] = await getKHAData(
    "https://www.koreanhiphopawards.com/2023/2023winners.html"
  );
  console.log(MMAData, KHAData);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
