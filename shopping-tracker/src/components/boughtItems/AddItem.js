import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setList } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import {
  Modal,
  Button,
  TextField,
  FormControl,
  FormHelperText,
  Backdrop,
  Fade,
  InputAdornment,
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {
  StyledCurrencyButton,
  GridDiv,
  searchInputLabelProps,
  inputProps,
} from "../../styles";
import { useForm } from "react-hook-form";
import { ErrorButton, ActionButton } from "../formIcons";
import { generateBrs } from "../../helpers";
import AddIcon from "@material-ui/icons/Add";
import StoreIcon from "@material-ui/icons/Store";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

function AddItem() {
  const { shoppingList, innerWidth, theme } = useSelector((state) => state);
  const useStyles = makeStyles((muiTheme) =>
    createStyles({
      root: {
        width: "100%",
        textAlign: "center",
      },
      paper: {
        position: "absolute",
        width: "50%",
        maxWidth: 700,
        minWidth: 300,
        backgroundColor: theme.includes("dark") ? "#3A3A3A" : "white",
        borderRadius: 7,
        color: theme.includes("dark") ? "white" : "black",
        boxShadow: muiTheme.shadows[5],
        padding: muiTheme.spacing(2, 4, 3),
        outline: "none",
      },
    })
  );
  const classes = useStyles();
  const modalStyle = getModalStyle();
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const empty = Object.keys(errors).length === 0;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data) => {
    data.deliveryDate = new Date(data.deliveryDate).valueOf();
    data.received = false;
    data.receivedDate = null;
    data.priceInUSD = Number(data.priceInUSD);
    data.id = uuidv4();
    dispatch(setList([...shoppingList, data]));
    handleClose();
  };

  return (
    <>
      <StyledCurrencyButton id="addItemButton" left onClick={handleOpen}>
        +
      </StyledCurrencyButton>
      <Modal
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
        }}
        open={open}
        onClose={handleClose}
      >
        <Fade direction="up" in={open}>
          <div style={modalStyle} className={classes.paper}>
            <div className={classes.root}>
              <h2>Add Product</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <GridDiv>
                  <div>
                    <TextField
                      id="name"
                      label="Product Name"
                      inputRef={register({
                        required: "Product name is required",
                      })}
                      name="name"
                      InputLabelProps={{
                        style: searchInputLabelProps[theme],
                      }}
                      InputProps={{
                        style: inputProps[theme],
                        endAdornment: (
                          <InputAdornment position="end">
                            <AddIcon style={{ color: "black" }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    {!empty &&
                      (errors.name ? (
                        <ErrorButton
                          id="nameError"
                          tooltipTitle={errors.name.message}
                        />
                      ) : (
                        <ActionButton />
                      ))}
                    {generateBrs(2)}
                    <TextField
                      id="store"
                      label="Store"
                      inputRef={register({
                        required: "Store is required",
                      })}
                      name="store"
                      InputLabelProps={{
                        style: searchInputLabelProps[theme],
                      }}
                      InputProps={{
                        style: inputProps[theme],
                        endAdornment: (
                          <InputAdornment position="end">
                            <StoreIcon style={{ color: "black" }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    {!empty &&
                      (errors.store ? (
                        <ErrorButton
                          id="storeError"
                          tooltipTitle={errors.store.message}
                        />
                      ) : (
                        <ActionButton />
                      ))}
                  </div>
                  {innerWidth < 1000 && <br />}
                  <div>
                    <TextField
                      id="priceInUSD"
                      label="Price In USD"
                      inputRef={register({
                        pattern: {
                          value: /^[+-]?\d+(\.\d+)?$/,
                          message: "Please enter a valid price",
                        },
                        required: "Price is required",
                      })}
                      name="priceInUSD"
                      InputLabelProps={{
                        style: searchInputLabelProps[theme],
                      }}
                      InputProps={{
                        style: inputProps[theme],
                        endAdornment: (
                          <InputAdornment position="end">
                            <AttachMoneyIcon style={{ color: "black" }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    {!empty &&
                      (errors.priceInUSD ? (
                        <ErrorButton
                          id="priceError"
                          tooltipTitle={errors.priceInUSD.message}
                        />
                      ) : (
                        <ActionButton />
                      ))}
                    {generateBrs(2)}
                    <FormControl>
                      <FormHelperText
                        style={{ color: theme.includes("dark") && "#DFDFDF" }}
                      >
                        Estimated Delivery Date
                      </FormHelperText>
                      <TextField
                        type="date"
                        id="deliveryDate"
                        name="deliveryDate"
                        inputRef={register({
                          required: "Delivery Date is required",
                        })}
                        style={{ width: "225px" }}
                        InputLabelProps={{
                          style: searchInputLabelProps[theme],
                        }}
                        InputProps={{
                          style: inputProps[theme],
                        }}
                      />
                    </FormControl>
                    {!empty &&
                      (errors.deliveryDate ? (
                        <ErrorButton
                          id="deliveryDateError"
                          tooltipTitle={errors.deliveryDate.message}
                        />
                      ) : (
                        <ActionButton />
                      ))}
                  </div>
                </GridDiv>
                {generateBrs(2)}
                <Button
                  id="submitButton"
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Add
                </Button>
              </form>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
}

export default AddItem;

function getModalStyle() {
  return {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
}
