import React from "react";
//prettier-ignore
import {
  Grid,Typography,Box,Button, Alert
} from "@mui/material";

import { makeStyles } from "@mui/styles";
import InputControl from "../../controls/InputControl";
import { useForm, CustomForm } from "../useForm";
import RadioGroupCtrl from "../../controls/RadioGroupCtrl";
import SelectCtrl from "../../controls/SelectCtrl";
import CartItem from "./cartItem/CartItem";
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 16,
    "& .MuiFormControl-root": {
      marginBottom: 8,
      width: "100%",
    },
  },
  validate: {
    marginTop: 16,
    backgroundColor: "#7368b6",
    "&:hover": {
      backgroundColor: "#8b81ca",
    },
  },
}));
const initialFieldValues = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  gender: "female",
  city: "",
  adress: "",
  payment: "",
  cardNumber: "",
  cvv: "",
};

const genderItems = [
  { id: 0, value: "female", label: "Female" },
  { id: 1, value: "male", label: "Male" },
  { id: 2, value: "other", label: "Other" },
];

const paymentOptions = [
  { id: 0, name: "Cash On Delivery" },
  { id: 1, name: "Smart Card" },
];
const CheckoutForm = () => {
  const classes = useStyles();
  const { values, handleInput } = useForm(initialFieldValues);
  const { cartItems } = useSelector((state) => state.cart);
  const tot = cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
  console.log(tot);
  return (
    <Box>
      <Typography
        variant="h6"
        component="h1"
        className="text-primary  text-center "
      >
        Checkout
      </Typography>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={6} className="px-2">
          <Typography
            variant="h6"
            component="h1"
            className="text-textTest  text-center "
          >
            Contact Form
          </Typography>
          <CustomForm>
            <InputControl
              label="First Name"
              name="firstName"
              value={values.firstName}
              onChange={handleInput}
              className="w-1/2 pr-2"
            />
            <InputControl
              label="Last Name"
              name="lastName"
              value={values.lastName}
              onChange={handleInput}
              className="w-1/2"
            />
            <InputControl
              label="Email"
              name="email"
              value={values.email}
              onChange={handleInput}
            />
            <InputControl
              label="Mobile"
              name="mobile"
              value={values.mobile}
              onChange={handleInput}
              className="w-1/2"
            />
            <InputControl
              label="Adress"
              name="adress"
              value={values.adress}
              onChange={handleInput}
            />
            <InputControl
              label="City"
              name="city"
              value={values.city}
              onChange={handleInput}
              className="w-1/2"
            />
            <RadioGroupCtrl
              name="gender"
              value={values.gender}
              label="Gender"
              onChange={handleInput}
              items={genderItems}
            />
            <SelectCtrl
              name="payment"
              value={values.payment}
              label="Payment Method"
              onChange={handleInput}
              options={paymentOptions}
            />
            {values.payment === "Smart Card" ? (
              <>
                <InputControl
                  label="Card Number"
                  name="cardnumber"
                  value={values.cardNumber}
                  onChange={handleInput}
                />
                <InputControl
                  label="Cvv"
                  name="cvv"
                  value={values.cvv}
                  onChange={handleInput}
                  type="password"
                />
              </>
            ) : (
              ""
            )}
          </CustomForm>
        </Grid>
        <Grid item xs={12} sm={6} className="px-2">
          <Typography
            variant="h6"
            component="h1"
            className="text-textTest  text-center "
          >
            Orders
          </Typography>
          <Box className="flex flex-col">
            {cartItems.length !== 0 ? (
              cartItems.map((item) => <CartItem item={item} key={item._id} />)
            ) : (
              <Alert variant="outlined" severity="error" className="my-4">
                Your Cart is Empty !
              </Alert>
            )}
          </Box>
          <Box className="flex justify-around">
            <Typography
              variant="h6"
              component="h1"
              className="text-textGreen  text-center "
            >
              Total
            </Typography>
            <Box className="w-20 h-10 grow-0  bg-bgTest rounded-lg flex items-center justify-center text-neutral-500 font-bold text-secondary_light px-4">
              $<span className=" font-bold text-textTest "> {tot}</span>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} className="px-2 flex justify-center">
          <Button variant="contained" className={classes.validate}>
            Validation
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CheckoutForm;
