import Header from "@/components/header";
import Footer from "@/components/footer";
import {getHeroText} from "@/lib/api";

export default async function Home() {
  const heroText = await getHeroText();

  return (
    <div>
      <Header />
        <main>
        <div className={"h-[32rem p-5 bg-[url(/images/Tpwmmfo3CiAJvwd4vXGzvn.jpg)] bg-cover bg-center flex justify-end items-end"}>
          <div className={"bg-black/50 text-white p-5 backdrop-brightness-50 text-3xl max-w-80"}>
          <h1>{heroText.data.Title}</h1>
            <p>
              {heroText.data.Content} </p>
        </div>
        </div>
          <div className={"grid grid-cols-3 gap-5 p-5 max-w-screen-lg m-auto"}>
            <div className={"bg-slate-100 p-5 flex flex-col gap-5"}>
              <h2>feature</h2>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt, nisi at commodo varius,
                est mi tristique risus, eget pulvinar risus purus nec libero.
              </div>
            </div>
            <div className={"bg-slate-100 p-5 flex flex-col gap-5"}>
              <h2>feature</h2>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt, nisi at commodo varius,
                est mi tristique risus, eget pulvinar risus purus nec libero.
              </div>
            </div>
            <div className={"bg-slate-100 p-5 flex flex-col gap-5"}>
              <h2>feature</h2>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt, nisi at commodo varius,
                est mi tristique risus, eget pulvinar risus purus nec libero.
              </div>
            </div>
          </div>
        </main>
      <Footer/>
    </div>
  );
}
