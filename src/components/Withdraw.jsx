import { useState, useEffect } from "react";
import useUserContext from "../hooks/useUserContext";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import RegisterPopUp from "./popups/RegisterPopUp";

import createTransaction from "../helpers/createTransaction";


import { Button, TextField, Box } from "@mui/material";
const Withdraw = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { user, setUser, loggedInUser, setLoggedInUser } = useUserContext();
  const [balance, setBalance] = useState();
  const [isRegisterPopUp, setIsRegisterPopUp] = useState(false);

  const validationSchema = yup.object({
    withdrawAmount: yup
      .number()
      .min(1, "Must be greater or equal than $1")
      .max(loggedInUser.balance, "Insufficient Funds")
      .required("Withdraw Amount is required")
      .typeError("The withdraw amount must be a number"),
  });

  const toggleRegisterPopUp = () => {
    setIsRegisterPopUp(!isRegisterPopUp);
  };

  const formik = useFormik({
    initialValues: {
      withdrawAmount: "",
    },

    validationSchema: validationSchema,

    onSubmit: () => {
      //Verify if there's logged in user
      if (!loggedInUser) {
        toast.error("Please login to make a successful transaction");
        return;
      }

      const witAmount = parseFloat(formik.values.withdrawAmount);

      if (witAmount > loggedInUser.balance) {
        toast.warn("Insufficient Funds");
        return;
      }

      let newBalance = 0;

      const newData = user.map((u) => {
        if (u.email === loggedInUser.email) {
          u.balance -= witAmount;
          newBalance = u.balance;
          const newTransaction = createTransaction("Withdraw", witAmount);
          u.transactionHistory.push(newTransaction);
          setBalance(u.balance);
        }
        return u;
      });

      setUser(newData);
      setLoggedInUser((prev) => ({ ...prev, balance: newBalance }));
      formik.resetForm();
      toast.success("Withdraw succesful");
      return;
    },
  });

  //Get initial balance
  useEffect(() => {
    if (loggedInUser) {
      setBalance(loggedInUser.balance);
    }
  }, [loggedInUser]);

  //Listen for formik values changes
  useEffect(() => {
    const { withdrawAmount } = formik.values;

    if (withdrawAmount.trim().length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formik.values]);

  const customStyles = {
    width: "fit-content",
   
    marginTop: '150px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };
  

  return (
    <>
      {!loggedInUser ? (
        <>
           <div class="card2">
  <div class="card-body">
    <div ><img src="/images/withbanner.png" className="homeImage" alt="..." /></div>
    
            <div className="card-container2">
        <button onClick={toggleRegisterPopUp} className="btn btn-success">
          Create Account
        </button>
      </div>
  </div>
</div>
{isRegisterPopUp && <RegisterPopUp handleClose={toggleRegisterPopUp} />}
        </>
      ) : (
        <div className="card" style={customStyles}>
          <div className="card-body">
            <div className="row">
              <h3>Withdraw</h3>
              <h5 className="card-title">
                Balance <span>${balance}</span>
              </h5>
            </div>
            <div>
              <Box m={2}>
                <TextField
                  className="text-box custom-input-box"
                  id="withdrawAmount"
                  name="withdrawAmount"
                  label="Withdraw Amount"
                  value={formik.values.withdrawAmount}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.withdrawAmount &&
                    Boolean(formik.errors.withdrawAmount)
                  }
                  helperText={
                    formik.touched.withdrawAmount &&
                    formik.errors.withdrawAmount
                  }
                />
              </Box>
              <Box m={2}>
                <Button
                  variant="contained"
                  onClick={formik.handleSubmit}
                  disabled={isDisabled}
                >
                  Withdraw
                </Button>
              </Box>
            </div>
          
          </div>
        </div>
      )}
    </>
  );
};

export default Withdraw;
