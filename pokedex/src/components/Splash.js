import styled, { keyframes } from "styled-components";

export const Splash = () => (
  <Wrapper>
    <svg
      width="100vw"
      height="100vw"
      viewBox="0 0 1280 390"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto" }}
      color="#E3C5FF"
    >
      <g clip-path="url(#drip-1_svg__clip0)">
        <path
          d="M690.833 180.646c15.244 28.147 20.24 171.065 67.732 171.065 47.491 0 63.192-99.527 69.839-178.792 1.635-19.506 10.178-54.867 32.376-69.366 22.197-14.5 57.494-24.795 76.245-8.834 30.14 25.653 46.38 61.117 76.635 29.383 10.66-11.19 16.71-57.745 44.04-78.74 19.86-15.255 41.01-23.609 71.2-15.084 30.2 8.525 50.38 50.366 103.86 45.72 38.01-3.304 70.71-37.817 118.84-45.72 71.32-11.711 62.14 142.627 130.54 134.457 33.24-3.97 60.85-27.868 82.14-67.107 21.3-39.24 95.56-68.75 129.75-38.06 34.18 30.691 25.93 344.609 114.34 343.429 88.41-1.181 109.38-422.345 109.63-422.435V-329S586.863-318.932 540.109-318.932H-130V72.851c0 18.844 7.057 111.951 28.982 111.951 21.925 0 28.899-65.043 49.968-66.103 21.069-1.06 21.734 40.358 56.598 42.521 34.863 2.163 92.53-63.828 115.381 0 22.85 63.828 24.349 224.558 58.023 222.15 17.274-1.236 37.007-36.037 37.771-94.475.764-58.438 20.593-85.72 38.514-85.72 36.793 0 59.544 16.131 65.286 55.223 3.257 22.167 16.751 45.935 46.808 45.935s40.99-28.334 51.861-85.189c15.345-80.254 88.018-110.619 113.038-46.225 10.178 26.194 23.816 46.225 42.657 46.225 18.841 0 41.242-14.603 49.378-38.498 14.568-42.789 51.324-28.148 66.568 0z"
          fill="#E3C5FF"
        ></path>
      </g>
      <defs>
        <clipPath id="drip-1_svg__clip0">
          <path fill="white" d="M0 0h1280v390H0z"></path>
        </clipPath>
      </defs>
    </svg>
  </Wrapper>
);

const dittoDrip = keyframes`
    0% {
        transform: translateY(-100%);
    }
    0% {
        transform: translateY(-100%);
    }
    25% {
        transform: translateY(0%);
    }
    100% {
        transform: translateY(0%);
    }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -9;

  /* transform: translate(-50%), -100%; */
  animation: 5s linear 10s infinite normal none running ${dittoDrip};
  /* height: 100vw; */
  width: 100vw;
`;
