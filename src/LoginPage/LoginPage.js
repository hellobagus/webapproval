import React, { useState, useEffect } from "react";
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
  Icon
} from '@chakra-ui/core';
import { login } from "../actions";

function LoginPage() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { email, password } = inputs;
  const loggingIn = useSelector((state) => state.authentication.loggingIn);
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(userActions.logout());
  // }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (email && password) {
      dispatch(login(email, password));
    }
  }
  const [showPassword, setShowPassword] = useState(false);


  const handlePasswordVisibility = () => setShowPassword(!showPassword);


  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <div>
   <Box textAlign="center">
              <Heading>Login</Heading>
            </Box>
            <Box my={4} textAlign="left">
      <form name="form" className="form" onSubmit={handleSubmit}>
        {alert.message && (
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )}
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={
              "form-control" + (submitted && !email ? " is-invalid" : "")
            }
          />
          {submitted && !email && (
            <div className="invalid-feedback">Username is required</div>
          )}
        </FormControl>
        <FormControl isRequired mt={6}>
          <FormLabel>Password</FormLabel>
          <InputGroup>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            
          />
            <InputRightElement width="3rem">
                      <Button
                        h="1.5rem"
                        size="sm"
                        onClick={handlePasswordVisibility}
                      >
                        {showPassword ? (
                          <Icon name="view-off" />
                        ) : (
                          <Icon name="view" />
                        )}
                      </Button>
                    </InputRightElement>
          {/* {submitted && !password && (
            <div className="invalid-feedback">Password is required</div>
          )} */}
          
          </InputGroup>
        </FormControl>
        <Button
                  variantColor="teal"
                  variant="outline"
                  type="submit"
                  width="full"
                  mt={4}
                >
            {loggingIn ? (
              <CircularProgress   isIndeterminate
              size="24px"
              color="teal"/>
            ) : (
                'Sign In'
            )}
          </Button>
      </form>
      </Box>
      </div>
    </Box>
    </Flex>
  );
}

export { LoginPage };
