import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const Container = styled.div`
  height: 100%;
  display: flex;
`;

export const ClosedSideBar = styled.header`
  max-width: 50px;
  width: 100%;
  height: 100%;
  padding: 10px;
  background: white;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;

  button {
    border: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
    padding: 0;
    width: 100%;
    text-align: center;

    li {
      cursor: pointer;
      color: #c4c4c4;
      padding: 16px 0;
    }
  }
`;

export const OpenSideBar = styled.header`
  height: 100%;
  width: 240px;
  background: white;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 100;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  button {
    color: #333;
    border: none;
    cursor: pointer;
  }

  section {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 16px;
    box-sizing: border-box; 

    h1 {
      color: #222;
    }

    ul {
      list-style: none;
      padding: 0;
      width: 100%;
      margin: ; 

      li {
        display: flex;
        align-items: center;
        color: #000;
        padding: 10px;
        margin-left: 10px;
        cursor: pointer;
        box-sizing: border-box; 
      

        &:hover {
          background: #e0e0e0;
        }
      }
    }
  }
`;

export const StyledFaBars = styled(FaBars)`
  color: #0088ff;
  font-size: 24px;
 
`;