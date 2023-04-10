import styled from "@emotion/styled";
export default function Home() {
  const Gradient = styled.div`
    background-image: url(gradientbackground.png);
    background-size: cover;
    height: 100vh;
  `;
  return (
    <>
      <Gradient>
        <h1>Hi, welcome to my website </h1>
      </Gradient>
    </>
  );
}
