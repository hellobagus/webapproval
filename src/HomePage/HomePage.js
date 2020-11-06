import React, { useEffect } from "react";
import {
  Link,
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams,
  useRouteMatch,
} from "react-router-dom";
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
} from "@chakra-ui/core";

import { getEmps } from "../actions";
import "./HomePage.css";

function HomePage(props) {
  const users = useSelector((state) => state.empList);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmps(user.UserId));
  }, []);

  return (
    <>
      <div align="center" justifyContent="center">
        <Avatar src={user.pict} m="4" />
        <h1>Hi {user.name}!</h1>
        <p float="right">
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
          {users.items &&
            users.items.map((item, idx) => {
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
                  <Divider />
                  <Text>{item.entity_name}</Text>
                  <Divider />
                  <Button fontSize="xl" p="4">
                    Total :{" "}
                    <Link
                      to={{ pathname: "/menu", state: {Data : item}}}
                      key={idx}
                    >
                      <Text color="#38B2AC" m="2">
                        {item.total}
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

export { HomePage };
{
  /* <Link to={{ pathname: '/menu/'+item.entity_cd}} key={idx}></Link> */
}
