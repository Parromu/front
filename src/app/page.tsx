import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  KHADataType,
  MMADataType,
  getKHAData,
  getMMAData,
} from "korean-music-awards";

export default async function Home() {
  // const KHAData: KHADataType[] = await getKHAData(KHAURL);
  // const AAAData: KHADataType[] = await getKHAData(AAAURL);
  // const GDAData: KHADataType[] = await getKHAData(GDAURL);
  const MMAData: MMADataType[] = await getMMAData(2023);
  const KHAData: KHADataType[] = await getKHAData(2023);
  console.log(MMAData);
  console.log(KHAData);

  return (
    <>
      {/* <HomeComponent /> */}
      <div className="w-8">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
