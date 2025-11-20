import Categories from "./Categories";
import SearchInput from "./search-input";

interface Props {
  data: any;
}
export const SearchFilter = ({ data }: Props) => {
  return (
    <div className="px-4 lg:px-12 py-8 flex flex-col border-b gap-4 w-full">
      <SearchInput />
      <Categories data={data}/>
    </div >
  );
}
