import React, { useState } from "react";
//prettier-ignore
import {
  FormControlLabel,FormControl,FormLabel,Grid,Paper,Radio,RadioGroup,Typography,
} from "@mui/material";

import { makeStyles } from "@mui/styles";
import InputControl from "../../controls/InputControl";
import { useForm, CustomForm } from "../useForm";
import RadioGroupCtrl from "../../controls/RadioGroupCtrl";
import SelectCtrl from "../../controls/SelectCtrl";

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
  fullName: "",
  email: "",
  mobile: "",
  gender: "female",
  city: "",
  adress: "",
  payment: "",
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
  return (
    <Paper>
      <Typography
        variant="h6"
        component="h1"
        className="text-primary  text-center "
      >
        Contact Informations
      </Typography>
      <CustomForm>
        <Grid container className={classes.root}>
          <Grid item xs={12} sm={6} className="px-2">
            <InputControl
              label="Full Name"
              name="fullName"
              value={values.fullName}
              onChange={handleInput}
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
            />
            <InputControl
              label="City"
              name="city"
              value={values.city}
              onChange={handleInput}
            />
            <InputControl
              label="Adress"
              name="adress"
              value={values.adress}
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12} sm={6} className="px-2">
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
          </Grid>
        </Grid>
      </CustomForm>
    </Paper>
  );
};

export default CheckoutForm;
