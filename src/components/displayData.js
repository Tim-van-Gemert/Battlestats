const DisplayData = (props) => {
  console.log(props.APIData);
  if (props.APIData != undefined) {
    return (
      <>
        {props.APIData.map((d) => {
          return (
            <div className="flex flex-row justify-between" key={d.name}>
              <div className="text-[#B4B4B4]">{d.name} : </div>
              <div className="text-white"> {d.data}</div>
            </div>
          );
        })}
      </>
    );
  }
  return null; // Return null if props.data is undefined
};

export default DisplayData;
