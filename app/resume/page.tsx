const page= () => {
  const viewerUrl = `https://drive.google.com/file/d/19wrl3zEnA3Z-rCf9mJ0G2TaK5ZHD2Vtb/preview`;

  return (
    <aside className="w-full bg-[#fff] rounded-[20px] p-10">
      <h1 className="w-full text-[#0B0909] text-[28px] font-bold ">
        Resume{" "}
        <span className="w-full">
          <hr
            style={{
              backgroundColor: "#FE9119",
              height: "4px",
              strokeWidth: "2px",
              stroke: "#FE9119",
              width: "100%",
              marginTop: "10px"
            }}
          />
        </span>
      </h1>

      <iframe
        src={viewerUrl}
        title="Google Drive PDF Viewer"
        className="h-[90%] w-full mt-5"
        seamless
        loading="lazy"
        style={{
          border: "none",
          overflow: "hidden",
          borderRadius: "20px",
        }}
      ></iframe>
    </aside>
  );
};

export default page;
