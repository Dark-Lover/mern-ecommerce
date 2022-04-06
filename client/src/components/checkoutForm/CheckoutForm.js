import React from "react";
//prettier-ignore
import {
  Grid,Paper,Typography,Box
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
            {cartItems.length !== 0
              ? cartItems.map((item) => <CartItem item={item} key={item._id} />)
              : "Cart EMPTY"}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CheckoutForm;
