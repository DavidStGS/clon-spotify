import getSongs from "@/actions/getSongs";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import PageContent from "./component/PageContent";

export const revalidate = 0;

export default async function Home() {
  const songs = await getSongs();

  return (
    <div
      className="      
        
      bg-neutral-900 
      rounded-lg 
      h-full 
      w-full 
      overflow-hidden 
      overflow-y-auto
      "
    >
      <Header className="from-bg-neutral">
        <div className="mt-7">
          <h1
            className="
            text-white
              text-3xl
              font-semibold
              mb-7
            "
          >
            Welcome Again
          </h1>
          <div
            className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          2xl:grid-cols-4
          gap 4
          
          "
          >
            <ListItem
              img="/images/liked.png"
              name="Liked Songs"
              href="Liked"
            ></ListItem>
          </div>
        </div>
      </Header>
      <div className="mt-40 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className=" text-white text-2xl font-semibold">Newest Songs</h1>
        </div>
        <div>
          <PageContent songs={songs} />
        </div>
      </div>
    </div>
  );
}
