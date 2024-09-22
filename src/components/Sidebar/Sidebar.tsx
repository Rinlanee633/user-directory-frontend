import { useState } from "react";
import { Container, ClosedSideBar, OpenSideBar, StyledFaBars } from "./styles";
import { FaHome } from 'react-icons/fa';
import logo from "../../assets/images/logo.png"

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleChangeSideBar = () =>  {
    setIsOpen((prevState) => !prevState);
  }

  return (
    
      <Container>
        {!isOpen ? (
          <ClosedSideBar>
            <nav>
              <button onClick={handleChangeSideBar} aria-expanded={isOpen}>
                <StyledFaBars 
                  style={{
                    transform: isOpen ? 'translateX(200px)' : 'translateX(0)',
                    transition: 'transform 0.4s',
                  }}
                />
              </button>
              
              <ul>
                <li>
                  <FaHome style={{ marginRight: '10px', color: '#0088ff', fontSize: '24px' }} />
                </li>
              </ul>


            </nav>
          </ClosedSideBar>
        ) : (
          <OpenSideBar>
            <section>
              <nav>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img 
                    src={logo} 
                    alt="MyDev Logo" 
                    style={{ width: '40px', height: '40px', marginRight: '10px' }}
                  />
                  <h1 style={{ marginRight: "10px" }}>MyDash</h1>
                  <button onClick={handleChangeSideBar} aria-expanded={isOpen}>
                    <StyledFaBars
                      style={{
                        transform: isOpen ? "translateX(50px)" : "translateX(0)",
                        transition: "transform 0.4s",
                      }}
                    />
                  </button>
                </div>
    
                <ul>
                  <li>
                    <FaHome style={{ marginRight: '10px', color: '#0088ff', fontSize: '24px' }} />
                    <p>Home</p>
                  </li>
                  <li>
                    <p>Item2</p>
                  </li>
                </ul>
              </nav>
              <div>
                
              </div>
            </section>
            <aside onClick={handleChangeSideBar} />
          </OpenSideBar>
        )}
      </Container>
   
  );
}

export default SideBar;