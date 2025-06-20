export default function Search() {
  return (
    <div className="relative w-[70%] m-[1rem]">
      <input
        type="text"
        placeholder="Search"
        className="h-[40px] w-full border p-[0.6rem] pl-10 text-white bg-transparent rounded-[1rem] text-[12px]"
      />
      <i className="fa fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none" />
    </div>
  );
}