import React from "react";
import styled from "styled-components";
import Iduslogo from "./Iduslogo.png";

export default function CardUI() {
  const handleStar = () => {
    // const isFirstStarFilled = document.getElementById("firstStar");
    const isSecondStarFilled = document.getElementById("secondStar");
    // console.log(isFirstStarFilled.checked);
    // console.log(isSecondStarFilled.checked);
    if (
      // isFirstStarFilled.checked === true &&
      isSecondStarFilled.checked === false
    ) {
      console.log("here i am");
      const firstImg = document.getElementById("firstStarImg");
      if (firstImg.style.backgroundColor !== "transparent") {
        console.log("make transparent!!!");
        firstImg.style.backgroundColor = "transparent";
      } else {
        console.log("hello");
        firstImg.style.backgroundColor = "#0084ff";
      }
      // isFirstStarFilled.style.backgroundColor = "transparent";
      // isFirstStarFilled.checked = false;
    }
  };

  return (
    <Main>
      <ImgBox>
        <Img src={Iduslogo} alt="Idus logo"></Img>
      </ImgBox>
      <ContentsBox>
        <Contents>
          <CardLabel>cardlabel</CardLabel>
          <CardTitle>cardtitle</CardTitle>
          <Hilight>hilight</Hilight>
          <ContentTitle>content title</ContentTitle>
          <Content>
            Lorem ipsum dolor sit amet, consec
            <br />
            tetur adipiscing elit, sed do eiusmod
            <br /> tempor incididunt ut labore et dolore magna aliqua. Nisl
            tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem
            ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.
            Commodo odio aenean sed adipiscing diam donec adipiscing tristique.
            Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at
            imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis.
            Egestas integer eget aliquet nibh praesent. In hac habitasse platea
            dictumst quisque sagittis purus. Pulvinar elementum integer enim
            neque volutpat ac.
          </Content>
        </Contents>
        <RateBox>
          <Rate>
            <label className="startRadio__box" onClick={handleStar}>
              <input type="radio" name="star" id="firstStar" />
              <span className="startRadio__img" id="firstStarImg">
                <span className="blind">별 1개</span>
              </span>
            </label>
            <label className="startRadio__box">
              <input type="radio" name="star" id="secondStar" />
              <span className="startRadio__img">
                <span className="blind">별 2개</span>
              </span>
            </label>
            <label className="startRadio__box">
              <input type="radio" name="star" id="" />
              <span className="startRadio__img">
                <span className="blind">별 3개</span>
              </span>
            </label>
            <label className="startRadio__box">
              <input type="radio" name="star" id="" />
              <span className="startRadio__img">
                <span className="blind">별 4개</span>
              </span>
            </label>
            <label className="startRadio__box">
              <input type="radio" name="star" id="" />
              <span className="startRadio__img">
                <span className="blind">별 5개</span>
              </span>
            </label>
          </Rate>
          <Writer>writer</Writer>
        </RateBox>
        <SubContentTitle>subTitle</SubContentTitle>
      </ContentsBox>
    </Main>
  );
}

const Main = styled.div`
  border: 3px solid red;
  display: flex;
  flex-direction: row;
  width: 35rem;
  height: 15rem;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 20rem;
    height: 30rem;
  }
  @media screen and (max-width: 700px) {
    height: 35rem;
  }
`;
const ImgBox = styled.div`
  border: 3px solid black;
  width: 15rem;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    width: 20rem;
    height: 20rem;
  }
`;
const Img = styled.img``;
const ContentsBox = styled.div`
  border: 3px solid blue;
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 800px) {
    width: 20rem;
  }
  @media screen and (max-width: 700px) {
    height: 15rem;
  }
`;
const Contents = styled.div`
  border: 3px solid yellow;
  /* padding: 1rem; */
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    height: 10rem;
  }
`;
const CardLabel = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
  }
`;
const CardTitle = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
  }
`;
const Hilight = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
  }
`;
const ContentTitle = styled.div`
  flex-grow: 1;
  padding-left: 1rem;
  padding-top: 1rem;
  font-weight: bold;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const Content = styled.p`
  flex-grow: 3;
  padding-left: 1rem;
  padding-right: 1rem;
  color: gray;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const RateBox = styled.div`
  border: 3px solid red;
  flex-grow: 1;
  display: flex;
  align-items: center;
  @media screen and (max-width: 800px) {
    display: none;
  }
  @media screen and (max-width: 700px) {
    display: flex;
  }
`;
const Rate = styled.div`
  border: 1px solid red;
  display: inline-block;
  overflow: hidden;
  height: 40px;
  :after {
    content: "";
    display: block;
    position: relative;
    z-index: 10;
    height: 40px;
    background: url("data:image/png;base64,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")
      repeat-x 0 0;
    background-size: contain;
    pointer-events: none;
  }
  .startRadio__box {
    border: 1px solid green;
    position: relative;
    z-index: 1;
    float: left;
    width: 38px;
    height: 40px;
    cursor: pointer;
    input {
      opacity: 0 !important;
      height: 0 !important;
      width: 0 !important;
      position: absolute !important;
      :checked + .startRadio__img {
        background-color: #0084ff;
      }
    }
  }
  .startRadio__img {
    display: block;
    position: absolute;
    right: 0;
    width: 500px;
    height: 40px;
    pointer-events: none;
  }
  /* .blind {
    border: 1px solid red;
    position: absolute;
    overflow: hidden;
    margin: -1px;
    padding: 0;
    width: 1px;
    height: 1px;
    border: none;
    clip: rect(0, 0, 0, 0);
  } */
`;

const Writer = styled.div`
  flex-grow: 1;
`;
const SubContentTitle = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
  }
`;
