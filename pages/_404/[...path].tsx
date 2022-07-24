// all 404 pages will be redirected to home page
// https://github.com/vercel/next.js/discussions/16749  = iK is where I found the solution
// it will not error on vercel build process which it was doing before

// VIP insert this code within ./pages/_404/[...path].tsx file

export const Custom404 = () => <div></div>;

export const getServerSideProps = () => {
  return { redirect: { destination: "/", permanent: false } };
};

export default Custom404;

// VIP after insert this code within nextconfig object in the next.config.js file
// async rewrites() {
//   return {
//     afterFiles: [{ source: "/:path*", destination: "/_404/:path*" }],
//   };
// },
