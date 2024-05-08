import { KHADataType, getKHAData } from "korean-music-awards";

export default async function HomeComponent() {
  const KHAData: KHADataType[] = await getKHAData(2023);
  console.log(KHAData);

  return <>home</>;
}
