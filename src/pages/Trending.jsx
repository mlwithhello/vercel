



// import React from "react";
// import Layout from "../components/Layout";

// export default function Trending() {
//   return (
//     <Layout>
//       <div className="w-[100%] h-[84vh] text-white text-3xl my-6 flex flex-col items-center justify-center">
//         <iframe src="/assets/cover.jpeg" className="w-full h-full" title="Resume"></iframe>
//         <a href="assets/resume.pdf" download className="mt-4 text-blue-500 block text-center">Download PDF</a>
//       </div>
//     </Layout>
//   );
// }


import React from "react";
import Layout from "../components/Layout";

export default function Trending() {
  return (
    <Layout>
      <div className="w-[100%] h-[84vh] text-white my-6 flex flex-col items-center justify-center">
        <iframe src="./assets/cover.jpeg" className="w-full h-full" title="Resume"></iframe>
        <a href="./assets/cover.jpeg" download className="mt-4 text-blue-500 block text-center">Download PDF</a>
      </div>
    </Layout>
  );
}
