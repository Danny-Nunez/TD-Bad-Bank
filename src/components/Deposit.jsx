import { useState, useEffect } from "react";
import useUserContext from "../hooks/useUserContext";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextField, Box } from "@mui/material";
import { toast } from "react-toastify";
import RegisterPopUp from "./popups/RegisterPopUp";

import createTransaction from "../helpers/createTransaction";



const Deposit = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { user, setUser, loggedInUser, setLoggedInUser } = useUserContext();
  const [balance, setBalance] = useState();
  const [isRegisterPopUp, setIsRegisterPopUp] = useState(false);

  const validationSchema = yup.object({
    depositAmount: yup
      .number()
      .min(1, "Must be greater or equal than $1")
      .required("Deposit Amount is required")
      .typeError("The deposit amount must be a number"),
  });


  const toggleRegisterPopUp = () => {
    setIsRegisterPopUp(!isRegisterPopUp);
  };

  const formik = useFormik({
    initialValues: {
      depositAmount: "",
    },

    validationSchema: validationSchema,

    onSubmit: () => {
      //Verify if there's logged in user
      if (!loggedInUser) {
        toast.error("Please login to make a successful transaction");
        return;
      }

      const depAmount = parseFloat(formik.values.depositAmount);
      let newBalance = 0;
      const newData = user.map((u) => {
        if (u.email === loggedInUser.email) {
          u.balance += depAmount;
          newBalance = u.balance;
          const newTransaction = createTransaction("Deposit", depAmount);
          u.transactionHistory.push(newTransaction);
          setBalance(u.balance);
        }
        return u;
      });

      setUser(newData);
      setLoggedInUser((prev) => ({ ...prev, balance: newBalance }));
      formik.resetForm();
      toast.success("Deposit successful");
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
    const { depositAmount } = formik.values;

    if (depositAmount.trim().length > 0) {
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
    <div ><img src="/images/lockbanner.png" className="homeImage" alt="..." /></div>
    
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
              <h4>Deposit</h4>
              <h5 className="card-title">
                Balance <span>${balance}</span>
              </h5>
            </div>
            <div>
              <Box m={2}>
                <TextField
                  className="text-box custom-input-box"
                  id="depositAmount"
                  name="depositAmount"
                  label="Deposit Amount"
                  value={formik.values.depositAmount}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.depositAmount &&
                    Boolean(formik.errors.depositAmount)
                  }
                  helperText={
                    formik.touched.depositAmount && formik.errors.depositAmount
                  }
                />
              </Box>
              <Box m={2}>
                <Button
                  variant="contained"
                  onClick={formik.handleSubmit}
                  disabled={isDisabled}
                >
                  Deposit
                </Button>
              </Box>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Deposit;
