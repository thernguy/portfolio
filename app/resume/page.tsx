import { FC } from "react";
interface pageProps {
  // Define your component props here
}

const page: FC<pageProps> = (props) => {
  const viewerUrl = `https://drive.google.com/file/d/19wrl3zEnA3Z-rCf9mJ0G2TaK5ZHD2Vtb/preview`;

  return (
    <section className="md:w-[70%] h-full bg-[#fff] rounded-[20px] p-10">
      <h1 className="text-[#0B0909] text-[28px] font-bold flex items-center gap-5">
        Resume{" "}
        <span>
          <hr
            style={{
              backgroundColor: "#FE9119",
              height: "2px",
              strokeWidth: "2px",
              stroke: "#FE9119",
              width: "252px",
            }}
          />
        </span>
      </h1>

      <iframe
        src={viewerUrl}
        title="Google Drive PDF Viewer"
        width="100%"
        height="100%"
        seamless
        style={{
          border: "none",
          overflow: "hidden",
          borderRadius: "20px",
          background: "transparent",
        }}
      ></iframe>
    </section>
  );
};

export default page;
