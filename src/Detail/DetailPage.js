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
  IconButton,
  Grid,
  Avatar,
} from "@chakra-ui/core";

import { getDetail } from "../actions";
import { history } from "../helpers";

function DetailPage(props) {
  console.log("peorss", props);

  const { entity_cd, approval_id } = props.location.state.Data;
  console.log("detail", props.location.state.Data);

  const menu = useSelector((state) => state.menuApprove);
  const details = useSelector((state) => state.detail);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(user.UserId, approval_id, entity_cd));
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
          {details.items &&
            details.items.map((item, idx) => {
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
                  <Text>{item.doc_no}</Text>
                  <Text>{item.approval_id}</Text>
                  <Text>{item.module}</Text>
                  <Divider />
                  <Text>{item.approval_name}</Text>
                  <Text>{item.approval_user}</Text>

                  <Divider />
                  <Text>{item.descs}</Text>
                  <Divider />

                  <Button fontSize="xl" p="4">
                    <Link
                      to={{ pathname: "/viewdetail", state: { Data: item } }}
                      key={idx}
                    >
                      <h5>View Detail</h5>
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

export { DetailPage };
