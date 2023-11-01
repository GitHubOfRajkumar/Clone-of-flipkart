import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useToast,
  MenuDivider,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { AiFillGift, AiFillShop } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BsBag, BsFillPersonFill } from "react-icons/bs";
import "../Css/Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
// import {BsCartCheckFill} from "react-icons/bs"
// import {BsFillCreditCard2BackFill} from "react-icons/bs"
import { FaAddressBook } from "react-icons/fa"

import { BiLogIn } from "react-icons/bi"
import { CgProfile } from "react-icons/cg"
// import {FaAddressBook} from "react-icons/fa"
import { BsFillCreditCard2BackFill } from "react-icons/bs"
import { BsCartCheckFill } from "react-icons/bs"
import { BsFillBagHeartFill } from "react-icons/bs"
import { MdReportProblem } from "react-icons/md"
import { MdOutlineFeedback } from "react-icons/md"



import {
  Link, useNavigate,
  //     // useNavigate 
} from "react-router-dom";

import { useSelector } from "react-redux";
import axios from "axios";
//   import { forToast } from "../Redux/authReducer/action";

const Navbar = () => {
  const navigate = useNavigate()
  const [Width, setWidth] = useState(window.innerWidth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const MenuOverlay = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const homepage = ()=>{
    navigate("/")
  }
  // axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>console.log(res.data))

  const DetectWindowSize = () => {
    setWidth(window.innerWidth);
  };
  // const isAuth = true;
  // const navigate = useNavigate();
  // const toast = useToast();
  //for auth---------->
  // const { isAuth } = useSelector((store) => {
  //   return store.authReducer;
  // });

  //================>

  // console.log(isAuth);
  // useEffect(() => {
  //   window.addEventListener("resize", DetectWindowSize);

  //   return () => {
  //     window.removeEventListener("resize", DetectWindowSize);
  //   };
  // }, [Width]);

  // const handleproduct = ()=>{
  //   navigate("/products")
  // }

  // const handleLogout = () => {
  //   localStorage.removeItem("activeid");
  //   navigate("/");
  //   forToast(toast, "Logout Successfull", "success");
  //   setTimeout(()=>{

  //     window.location.reload();
  //   },1000)

  // };

  // const navigater = ()=>{
   
  // }

  return (
    <>
      {/* <Box bg="#e9edc9">
          <Flex
            p="10px 50px"
            justifyContent={"space-between"}
            w="90%"
            m="auto"
            direction={["column", "row"]}
            gap="20px"
          >
            <Flex
              alignItems={"center"}
              justifyContent="space-around"
              direction={["column", "row"]}
              gap="20px"
            >
              <AiFillGift size="25px" color="#f2cc8f" />
              <Text>
                LIT Liquid Matte Lipstick + LIT Valvet Liquid Matte Lipstick GET
                this @ Re 1
              </Text>
              <Text
                color="#f2cc8f"
                cursor={"pointer"}
                m="0px 20px"
                fontWeight={"bold"}
              >
                Shop Now
              </Text>
            </Flex>
            <Flex alignItems={"center"} gap="10px" cursor={"pointer"}>
              <AiFillShop size="20px" />
              <Text>MyGlamm Store</Text>
            </Flex>
          </Flex>
        </Box> */}
      <Box bg="#ffffff" p="20px">
        <Flex
          justifyContent={"space-between"}
          alignItems="center"
          direction={["column", "row"]}
          gap="20px"
        >
          <Flex
            justifyContent={"space-around"}
            alignItems="center"
            direction={["column", "row"]}
          >
            <Image
            className="flipkart-logo"
            onClick={homepage}
              w="10%"
              src="https://www.atun.in/wp-content/uploads/2020/07/Flipkart-Logo.png"
            />
            <div className="search-box" style={{ padding: "20px" }}>
              <button className="btn-search">
                <FiSearch style={{marginTop:"5px"}} size="40px"/>
              </button>
              <input
                type="text"
                className="input-search"
                placeholder="Type to Search..."
              />
            </div>
            <div>
              <Menu>
                <MenuButton
                  as={Button}
                  style={{ borderRadius: "60px", border: "none", left: "520px" }}
                  rounded={"full"}
                  bg={"white"}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                  width={"60px"}
                >

                  <Avatar

                    style={{ borderRadius: "40px", width: "55px" }}
                    // rounded={"full"}
                    src={
                      'https://cdn-icons-png.flaticon.com/512/146/146035.png'
                    }
                  />
                </MenuButton>
                <MenuList className="menu" style={{ paddingBottom: "10px" }}>
                  <MenuItem className="menuitem1">
                    <Link to={"/login"} style={{background:"none",textDecoration:"none",color:"black"}}>
                    Login
                    <BiLogIn style={{background:"none",color:"green"}}/>
                    </Link>
                    
                    
                    
                    
                    
                    </MenuItem>
                  {/* */}
                  <MenuItem className="menuitem1">Update Profile <CgProfile style={{background:"none",color:"green"}}/></MenuItem>
                  {/* <MenuDivider /> */}
                  <MenuItem className="menuitem1">Update Address <FaAddressBook style={{background:"none",color:"green"}}/></MenuItem>
                  <MenuItem className="menuitem1">Update Card Details <BsFillCreditCard2BackFill style={{background:"none",color:"green"}}/></MenuItem>
                  <MenuItem className="menuitem1">Cart <BsCartCheckFill style={{background:"none",color:"green"}}/></MenuItem>
                  <MenuItem className="menuitem1">Wishlist <BsFillBagHeartFill style={{background:"none",color:"green"}}/></MenuItem>
                  <MenuItem className="menuitem1">Report A Problem <MdReportProblem style={{background:"none",color:"green"}}/></MenuItem>
                  <MenuItem className="menuitem1">Feedback <MdOutlineFeedback style={{background:"none",color:"green"}}/></MenuItem>


                </MenuList>
              </Menu>
            </div>

          </Flex>
          <Flex justifyContent={"space-around"} alignItems="center" gap="20px">
            {/* <Link to={"/cart"}>
                {" "}
                <BsBag size="30px" cursor={"pointer"} />
              </Link> */}

            {/* <Link to={'/userdashboard'}><Avatar size='sm'>
                <AvatarBadge  boxSize='1.25em' bg='green.500' />
              </Avatar></Link> */}
            {/* {isAuth ? (
                <Popover>
                  <PopoverTrigger>
                    <Avatar size="sm" cursor={"pointer"}>
                      <AvatarBadge boxSize="1.25em" bg="green.500" />
                    </Avatar>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader fontWeight={'700'}>Dashboard</PopoverHeader>
                    <PopoverBody textAlign={'left'} fontWeight={'500'} cursor='pointer' >
                      <Text _hover={{textDecoration:'underline'}} mb='5px'>Update your profile</Text>
                      <Text _hover={{textDecoration:'underline'}} mb='5px'>Your order</Text>
                      <Text _hover={{textDecoration:'underline'}} mb='10px'>Your cart item</Text>
                      <Button
                        _hover={{ bg: "red", color: "white" }}
                        bg="pink"
                        // onClick={handleLogout}
                      >
                        Logout
                      </Button>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              ) : (
                <Link to={"/login"}>
                  {" "}
                  <BsFillPersonFill size="30px" cursor={"pointer"} />
                </Link>
              )}
           
          
           */}
          </Flex>
        </Flex>
        <div style={{ display: "flex", justifyContent: "space-evenly", gridTemplateColumns: "repeat(6,1fr)" }}>
          <Box>
            {Width < 600 ? (
              <Box m="20px">
                <Button
                  onClick={() => {
                    MenuOverlay();
                    onOpen();
                  }}
                  colorScheme={"#f2cc8f"}
                  color="black"
                >
                  <RxHamburgerMenu style={{ marginRight: "10px" }} /> Menu
                </Button>
                <Modal isCentered isOpen={isOpen} onClose={onClose}>
                  Menu
                  <ModalContent>
                    <ModalHeader>Menu</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)" }}>
                        <Box>
                        <Link to={"/products"}>
                          <Text style={{color:"red"}} className="navbar-items">
                           HOME
                           </Text>
                           </Link>
                        </Box>
                        <Box>
                          <Menu>
                            <MenuButton className="navbar-items">
                              MakeUp
                            </MenuButton>
                            <MenuList>
                              <MenuItem
                                className="hvr-underline-from-center"
                                bg="none"
                              >
                                Item 1
                              </MenuItem>
                              <MenuItem
                                className="hvr-underline-from-center"
                                bg="none"
                              >
                                Item 2
                              </MenuItem>
                              <MenuItem
                                className="hvr-underline-from-center"
                                bg="none"
                              >
                                Item 3
                              </MenuItem>
                              <MenuItem
                                className="hvr-underline-from-center"
                                bg="none"
                              >
                                Item 4
                              </MenuItem>
                            </MenuList>
                          </Menu>
                        </Box>
                        <Box>
                          <Menu>
                            <MenuButton
                              // onClick={handleproduct}
                              className="navbar-items">
                              HAIR CARE
                            </MenuButton>
                            <MenuList>
                              <MenuItem
                                className="hvr-underline-from-center"
                                bg="none"
                              >
                                Item 1
                              </MenuItem>
                              <MenuItem
                                className="hvr-underline-from-center"
                                bg="none"
                              >
                                Item 2
                              </MenuItem>
                              <MenuItem
                                className="hvr-underline-from-center"
                                bg="none"
                              >
                                Item 3
                              </MenuItem>
                              <MenuItem
                                className="hvr-underline-from-center"
                                bg="none"
                              >
                                Item 4
                              </MenuItem>
                            </MenuList>
                          </Menu>
                        </Box>
                        <Box>
                          <Menu>
                            <MenuButton className="navbar-items">
                              <a href="/products"> BATH & BODY</a>
                            </MenuButton>
                            <MenuList>
                              <MenuItem
                                className="hvr-underline-from-center"
                                bg="none"
                              >
                                Item 1
                              </MenuItem>
                              <MenuItem
                                className="hvr-underline-from-center"
                                bg="none"
                              >
                                Item 2
                              </MenuItem>
                              <MenuItem
                                className="hvr-underline-from-center"
                                bg="none"
                              >
                                Item 3
                              </MenuItem>
                              <MenuItem
                                className="hvr-underline-from-center"
                                bg="none"
                              >
                                Item 4
                              </MenuItem>
                            </MenuList>
                          </Menu>
                        </Box>
                        <Box>
                          <Menu>
                            <MenuButton className="navbar-items">
                              SKINCARE
                            </MenuButton>
                            <MenuList>
                              <MenuItem
                                className="hvr-underline-from-center"
                                bg="none"
                              >
                                Item 1
                              </MenuItem>
                              <MenuItem
                                className="hvr-underline-from-center"
                                bg="none"
                              >
                                Item 2
                              </MenuItem>
                              <MenuItem
                                className="hvr-underline-from-center"
                                bg="none"
                              >
                                Item 3
                              </MenuItem>
                              <MenuItem
                                className="hvr-underline-from-center"
                                bg="none"
                              >
                                Item 4
                              </MenuItem>
                            </MenuList>
                          </Menu>
                        </Box>
                        <Box>
                          <Menu>
                            <MenuButton className="navbar-items">
                              SANITIZING CARE
                            </MenuButton>
                            <MenuList>
                              <MenuItem
                                className="hvr-underline-from-center"
                                bg="none"
                              >
                                Item 1
                              </MenuItem>
                              <MenuItem
                                className="hvr-underline-from-center"
                                bg="none"
                              >
                                Item 2
                              </MenuItem>
                              <MenuItem
                                className="hvr-underline-from-center"
                                bg="none"
                              >
                                Item 3
                              </MenuItem>
                              <MenuItem
                                className="hvr-underline-from-center"
                                bg="none"
                              >
                                Item 4
                              </MenuItem>
                            </MenuList>
                          </Menu>
                        </Box>
                        <Box>
                          <Menu>
                            <MenuButton className="navbar-items">
                              COLLECTION
                            </MenuButton>
                            <MenuList>
                              <MenuItem
                                className="hvr-underline-from-center"
                                bg="none"
                              >
                                Item 1
                              </MenuItem>
                              <MenuItem
                                className="hvr-underline-from-center"
                                bg="none"
                              >
                                Item 2
                              </MenuItem>
                              <MenuItem
                                className="hvr-underline-from-center"
                                bg="none"
                              >
                                Item 3
                              </MenuItem>
                              <MenuItem
                                className="hvr-underline-from-center"
                                bg="none"
                              >
                                Item 4
                              </MenuItem>
                            </MenuList>
                          </Menu>
                        </Box>
                        <Box>
                          <Text className="navbar-items">MYGLAMM STUDIO</Text>
                        </Box>
                        <Box>
                          <Text className="navbar-items">OFFERS</Text>
                        </Box>
                      </div>
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </Box>
            ) : (
              <div
                style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(6,1fr)" }}
              >
                <div style={{ textAlign: "left", display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: "130px" }}>


                  <Menu>
                  <Link to="/products"><MenuButton className="navbar-items"> HOME  </MenuButton></Link>
                  </Menu>
                  <Box>
                    <Menu>
                      <MenuButton className="navbar-items">MakeUp</MenuButton>
                      <MenuList style={{width:"120px"}}>
                        <MenuItem className="hvr-underline-from-center" >
                          Mens
                        </MenuItem>
                        <MenuItem className="hvr-underline-from-center" >
                          Womens
                        </MenuItem>
                        <MenuItem className="hvr-underline-from-center" >
                          Kids
                        </MenuItem>
                        <MenuItem className="hvr-underline-from-center" >
                         Home
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Box>
                  <Box>
                    <Menu>
                      <MenuButton className="navbar-items">HAIR CARE</MenuButton>
                      <MenuList style={{width:"120px"}}>
                        <MenuItem className="hvr-underline-from-center" bg="none">
                          Electronics
                        </MenuItem>
                        <MenuItem className="hvr-underline-from-center" bg="none">
                          Appliances
                        </MenuItem>
                        <MenuItem className="hvr-underline-from-center" bg="none">
                          Night Wear
                        </MenuItem>
                        <MenuItem className="hvr-underline-from-center" bg="none">
                          Dress
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton className="navbar-items">COLLECTION</MenuButton>
                      <MenuList style={{width:"120px"}}>
                        <MenuItem className="hvr-underline-from-center" bg="none">
                          Kurtis
                        </MenuItem>
                        <MenuItem className="hvr-underline-from-center" bg="none">
                          Pajamas
                        </MenuItem>
                        <MenuItem className="hvr-underline-from-center" bg="none">
                          Jeans
                        </MenuItem>
                        <MenuItem className="hvr-underline-from-center" bg="none">
                          Trousers
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Box>
                </div>
              </div>
            )}
          </Box>

        </div>

      </Box>
    </>
  );
};

export default Navbar;
