import { Team } from "@/types";
import SearchBarForm from "./SearchBarForm";
import getTeams from "@/app/util/getTeams";

export default async function SearchBar() {

  let teamsData: Team[] = await getTeams();
  
  return (
    <div className="flex justify-center items-center w-full p-3 bg-black/40">
      <div className="w-1/6 flex justify-center items-center text-neutral-100">
        <a
          href=""
          className="flex justify-center items-center"
        >
          <img
            src="/logo.jpg"
            alt="logo"
            className="w-12 h-12 object-contain rounded-full"
          />
          <div className="px-2 md:block hidden font-bold text-xl">
            SoccerHub
          </div>
        </a>
      </div>

      <div className="w-4/6 flex justify-center items-center">
        <SearchBarForm teamsData={teamsData}/>
      </div>

      <div className="w-1/6">
      </div>
    </div>
  )
}

