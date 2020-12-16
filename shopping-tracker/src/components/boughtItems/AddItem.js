import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setList } from "../../redux/actions";
import {
  Modal,
  Button,
  TextField,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { StyledCurrencyButton, GridDiv } from "../../styles/styledComponents";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useForm } from "react-hook-form";
import { ErrorButton, ActionButton } from "../formIcons";
import { generateBrs } from "../../helpers";

function AddItem() {
  const classes = useStyles();
  const modalStyle = getModalStyle();
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const { shoppingList, innerWidth } = useSelector((state) => state);
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
    console.log(data);
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
                    />
                    {!empty ? (
                      errors.name ? (
                        <ErrorButton
                          id="nameError"
                          tooltipTitle={errors.name.message}
                        />
                      ) : (
                        <ActionButton />
                      )
                    ) : null}
                    {generateBrs(2)}
                    <TextField
                      id="store"
                      label="Store"
                      inputRef={register({
                        required: "Store is required",
                      })}
                      name="store"
                    />
                    {!empty ? (
                      errors.store ? (
                        <ErrorButton
                          id="storeError"
                          tooltipTitle={errors.store.message}
                        />
                      ) : (
                        <ActionButton />
                      )
                    ) : null}
                  </div>
                  {innerWidth < 880 && <br />}
                  <div>
                    <TextField
                      id="priceInShekels"
                      label="Price In Shekels"
                      inputRef={register({
                        pattern: {
                          value: /^[+-]?\d+(\.\d+)?$/,
                          message: "Please enter a valid price",
                        },
                        required: "Price in shekels is required",
                      })}
                      name="priceInShekels"
                    />
                    {!empty ? (
                      errors.priceInShekels ? (
                        <ErrorButton
                          id="priceError"
                          tooltipTitle={errors.priceInShekels.message}
                        />
                      ) : (
                        <ActionButton />
                      )
                    ) : null}
                    {generateBrs(2)}
                    <FormControl>
                      <FormHelperText>Estimated Delivery Date</FormHelperText>
                      <TextField
                        type="date"
                        id="deliveryDate"
                        name="deliveryDate"
                        inputRef={register({
                          required: "Delivery Date is required",
                        })}
                        style={{ width: "200px" }}
                      />
                    </FormControl>
                    {!empty ? (
                      errors.deliveryDate ? (
                        <ErrorButton
                          id="deliveryDateError"
                          tooltipTitle={errors.deliveryDate.message}
                        />
                      ) : (
                        <ActionButton />
                      )
                    ) : null}
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

const useStyles = makeStyles((theme) =>
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
      backgroundColor: theme.palette.background.paper,
      borderRadius: 7,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      outline: "none",
    },
  })
);
