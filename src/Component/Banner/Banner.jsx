// import React from 'react'
// import background from '../../assets/background1.jpg';
// export default function Banner() {
//   return (
//     <>
//          {/* Background Section */}
//       <div
//         className=" h-screen bg-cover bg-center flex items-center justify-center text-white"
//         style={{
//           backgroundImage: `url(${background})`,
//         }}
//       >
//         <div>
//             <div className="bg-black  p-8 rounded-xl text-center max-w-3xl">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">Park Safely. Sleep Peacefully</h1>
//           <p className="text-lg md:text-2xl mb-6">Find secure off-grid stays anywhere</p>
//         </div>
//         </div>
//       </div>
//     </>
//   )
// }


import background from '../../assets/background1.jpg';

export default function Banner() {
  return (
    <>
      {/* Background Section */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

        {/* Content */}
        <div className="relative z-10 p-8 text-center mb-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Park Safely. Sleep Peacefully
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Find secure off-grid stays anywhere
          </p>
          
        </div>
      </div>
    </>
  );
}

