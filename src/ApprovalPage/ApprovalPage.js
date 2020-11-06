import React, { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  CircularProgress,
  Text,
  InputGroup,
  InputRightElement,
  Icon,
  Divider,
  SimpleGrid,
  Grid,
  Avatar,
  IconButton
} from '@chakra-ui/core';
import { history } from "../helpers"

import { getEmps, getApproval } from "../actions";

function ApprovalPage(props) {
    console.log("peorss",props)

    const { Data, entity_cd }= props.location.state.Data;
    console.log("mau", props.location.state.Data)
  
  const menu = useSelector((state) => state.menuApprove);
  const users = useSelector((state) => state.empList);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();

  // const getApprovals = useCallback(async () => {
  //   await dispatch(getApproval(user.UserId, entity_cd));
  // }, [dispatch]);
  useEffect(() => {
    dispatch(getApproval(user.UserId, entity_cd));
  }, []);

  return (
    <>
     <Link
          to=""
          onClick={(e) => {
            e.preventDefault();
            history.goBack();
          }}
        >
           <IconButton
        variant="outline"
        variantColor="teal"
        aria-label="Send email"
        icon="chevron-left"
        style={{
          marginLeft: "50px",
          top: "-50px",
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
        }}
      />
        </Link>
     <div align="center" justifyContent="center">
     <Avatar src={user.pict} m="4" />
        <h1>Hi {user.name}!</h1>
      <p  float="right">
        <Link to="/login">Logout</Link>
      </p>
      </div>
      <div align="center" justifyContent="center">
        <Flex
          flexWrap="wrap"
          align="center"
          justifyContent="center"
          maxW="700px"
          mt="10"
        >
          {menu.items &&
            menu.items.map((item, idx) => {
              return (
                <Box
                  p="6"
                  m="4"
                  align="center"
                  justifyContent="center"
                  borderWidth="1px"
                  rounded="lg"
                  flexBasis="45%"
                  variantColor="orange"
                  variant="outline"
                  maxWidth="500px"
                  borderRadius={8}
                  boxShadow="lg"
                  key={idx}
                >
                  <Text fontSize="xl" color="#F6AD55">
                    {item.entity_cd}
                  </Text>
                  <Text>{item.module}</Text>
                  <Divider />
                  <Text>{item.approval_name}</Text>
                  <Text>{item.approval_id}</Text>

                  <Text>{item.approval_user}</Text>

                  <Divider />
                  <Button fontSize="xl" p="4">
                    Total :{" "}
                    <Link
                      to={{ pathname: "/detail", state: {Data : item}}}
                      key={idx}
                    >
                      <Text color="#38B2AC" m="2">
                        {item.total_doc}
                      </Text>
                      </Link>
                  </Button>
                </Box>
              );
            })}
        </Flex>
      </div>
    </>
  );
}

export { ApprovalPage };