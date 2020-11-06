import React, { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Flex,
  Box,
  Heading,
  Tooltip,
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
  Badge,
  Stack,
  List,
  IconButton,
  ListItem,
} from "@chakra-ui/core";

import {history } from "../helpers"
import { getViewDetail } from "../actions";
import moment from "moment";
import numFormat from "../components/numFormat";

const status_descs = {
  P: "Pending",
  R: "Revise",
  C: "Cancel",
  A: "Approve",
};

function ViewDetail(props) {
  console.log("peorss", props);


  const {
    request_dept_name,
    request_staff_id,
    doc_no,
    request_no,
    amount,
    entity_cd,
    entity_name,
    descs,
    doc_date,
    module: modules,
    document_descs,
    approval_id,
    approval_user,
  } = props.location.state.Data;
  console.log("viewdetail", props.location.state.Data);

  const data = props.location.state.Data;

  const viewdetail = useSelector((state) => state.viewdetail);

  const details = useSelector((state) => state.detail);
  const user = useSelector((state) => state.authentication.user);
  const [activeType, setActiveType] = useState("");
  const [remarks, setRemarks] = useState("");

  const dispatch = useDispatch();
  const handleRemarks = (val) => {
    setRemarks(val);
    data.reason_remarks = val;
  };

  const onPressed = (type) => {
    setModalVisible(true);
    if (type == "A") {
      setRemarks("");
    }
    setActiveType(type);
  };

  useEffect(() => {
    dispatch(
      getViewDetail(user.UserId, entity_cd, doc_no, approval_id, approval_user)
    );
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
        <Flex align="center" justifyContent="center" maxW="700px" mt="10">
          {viewdetail.items &&
            viewdetail.items.map((item, idx) => {
              return (
                <Box
                  p="6"
                  m="4"
                  borderWidth="1px"
                  rounded="lg"
                  variantColor="orange"
                  variant="outline"
                  maxWidth="500px"
                  borderRadius={8}
                  boxShadow="lg"
                  key={idx}
                >
                  <Box d="flex" alignItems="baseline" mb="4">
                    <SimpleGrid columns={2} spacing="20px">
                      <Badge rounded="full" px="2" variantColor="teal">
                        {item.approval_user_name}
                      </Badge>
                      <Badge rounded="full" px="2" variantColor="teal">
                        {item.module}
                      </Badge>
                    </SimpleGrid>
                  </Box>
                  <Box d="flex" alignItems="baseline">
                    <List as="ol" styleType="none">
                      <ListItem
                        none
                        fontSize="xs"
                        align="left"
                        justifyContent="left"
                      >
                        Doc no : {item.doc_no}
                      </ListItem>
                    </List>
                  </Box>
                  <Box d="flex" alignItems="baseline">
                    <List as="ol" styleType="none">
                      <ListItem fontSize="xs">
                        Doc data :{" "}
                        {moment(item.doc_date).format("DD MMMM YYYY")}
                      </ListItem>
                    </List>
                  </Box>
                  <Divider />
                  <Box alignItems="baseline" color="gray.500">
                    <List as="ol" styleType="none">
                      <p style={{ fontSize: "12px", textAlign: "left" }}>
                        {item.descs}
                      </p>
                    </List>
                  </Box>
                  <Divider />
                  <Box d="flex" alignItems="baseline" mb="4">
                    <Text>Rp. {numFormat(item.amount)}</Text>
                  </Box>
                  <Box>
                    <SimpleGrid columns={3} spacing="20px">
                      <Button variant="outline">Revise</Button>
                      <Button bg="green.600"color="white.500">Approval</Button>
                      <Button variant="outline">Cancel</Button>
                    </SimpleGrid>
                  </Box>
                </Box>
              );
            })}
        </Flex>
      </div>
    </>
  );
}

export { ViewDetail };
