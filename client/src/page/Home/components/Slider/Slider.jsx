// import React from "react";
// import "./Slider.scss";

// // Icons
// import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
// import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

// const Slider = () => {
//   const [currentSlide, setCurrentSlide] = React.useState(0);

//   const data = [
//     "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     "https://images.pexels.com/photos/3457273/pexels-photo-3457273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   ];

//   const prevSlide = () => {
//     setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
//   };

//   const nextSlide = () => {
//     setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
//   };

//   return (
//     <div className="slider">
//       <div
//         className="container"
//         style={{
//           transform: `translateX(-${currentSlide * 100}vw)`,
//         }}
//       >
//         <img src={data[0]} alt="sliderImage" />
//         <img src={data[1]} alt="sliderImage" />
//         <img src={data[2]} alt="sliderImage" />
//       </div>
//       <div className="icons">
//         <div className="icon" onClick={prevSlide}>
//           <WestOutlinedIcon />
//         </div>
//         <div className="icon" onClick={nextSlide}>
//           <EastOutlinedIcon />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;
