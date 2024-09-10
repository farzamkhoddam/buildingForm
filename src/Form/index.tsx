import {
  Typography,
  Box,
  FormControl,
  FormLabel,
  TextField,
  Button,
  styled,
  Stack,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import MuiCard from "@mui/material/Card";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Interior from "./Interior";
import Exterior from "./Exterior";
import React, { useState } from "react";
import { FormType, PropertyOwnership } from "../interfaces/FormTypes";
import { useMutation } from "@tanstack/react-query";
import sanityClient from "../SanityClient";
import { LoadingButton } from "@mui/lab";
import { v4 as uuidv4 } from "uuid";
import { UploadBody } from "@sanity/client";

function Form() {
  const [data, setData] = useState<FormType>({} as FormType);
  const mutation = useMutation({
    mutationFn: async () => {
      const imageAsset = await sanityClient.assets.upload(
        "image",
        data?.PropertyPhoto || ({} as UploadBody),
        {
          filename: data?.PropertyPhoto?.name,
          contentType: data?.PropertyPhoto?.type,
        }
      );
      // @ts-ignore
      const res = await sanityClient.create({
        _type: "form",
        FullName: data?.FullName,
        PhoneNumber: data?.PhoneNumber,
        Address: data?.Address,
        Description: data?.Description,
        PropertyOwnership: data?.PropertyOwnership,
        PropertyPhoto: {
          _type: "image",
          asset: { _type: "reference", _ref: imageAsset._id },
        },
        ExteriorFields: [
          {
            _key: uuidv4(),
            _type: "exterior",
            Roof: data?.ExteriorFields?.Roof || false,
            BrickWall: data?.ExteriorFields?.BrickWall || false,
            Floor: data?.ExteriorFields?.Floor || false,
            Eaves: data?.ExteriorFields?.Eaves || false,
            Facia: data?.ExteriorFields?.Facia || false,
            Render: data?.ExteriorFields?.Render || false,
            Gutter: data?.ExteriorFields?.Gutter || false,
          },
        ],
        InteriorFields: [
          {
            _key: uuidv4(),
            _type: "interior",
            Timberwork: data?.InteriorFields.Timberwork || false,
            Wall: data?.InteriorFields?.Wall || false,
            Roof: [
              {
                _type: "interiorRoof",
                _key: uuidv4(),
                Room: data?.InteriorFields?.Room || false,
                Shower: data?.InteriorFields?.Shower || false,
              },
            ],
          },
        ],
        Date: data?.Date.toISOString().slice(0, 10),
        ReminderDate: data?.ReminderDate.toISOString().slice(0, 10),
      });
      return res;
    },
  });
  // if (isLoading) {
  //   return <div>loading...</div>;
  // }
  return (
    <Box sx={{ height: "100vh" }}>
      <SignInContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}>
            Form
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 2,
            }}>
            <FormControl>
              <FormLabel sx={{ width: "fit-content" }} htmlFor="name">
                Full Name
              </FormLabel>
              <TextField
                id="name"
                type="text"
                name="name"
                placeholder="John Doe"
                autoFocus
                required
                fullWidth
                value={data?.FullName || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setData({ ...data, FullName: e?.target?.value });
                }}
                variant="outlined"
                sx={{ ariaLabel: "Full Name" }}
              />
            </FormControl>
            <FormControl>
              <FormLabel sx={{ width: "fit-content" }} htmlFor="phonenumber">
                Phone Number
              </FormLabel>
              <TextField
                id="phonenumber"
                type="number"
                name="phonenumber"
                value={data?.PhoneNumber || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setData({ ...data, PhoneNumber: e?.target?.value });
                }}
                slotProps={{
                  htmlInput: {
                    inputMode: "numeric",
                  },
                }}
                placeholder="9999999"
                required
                fullWidth
                variant="outlined"
                sx={{ ariaLabel: "Phone Number" }}
              />
            </FormControl>
            <FormControl>
              <FormLabel sx={{ width: "fit-content" }} htmlFor="name">
                Adress
              </FormLabel>
              <TextField
                id="address"
                type="text"
                name="address"
                placeholder="21 monroe st"
                required
                fullWidth
                value={data?.Address || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setData({ ...data, Address: e?.target?.value });
                }}
                variant="outlined"
                sx={{ ariaLabel: "Address" }}
              />
            </FormControl>
            <FormControl>
              <FormLabel sx={{ width: "fit-content" }} htmlFor="name">
                Description
              </FormLabel>
              <TextField
                id="description"
                type="text"
                multiline
                name="description"
                placeholder="e.g description"
                required
                fullWidth
                value={data?.Description || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setData({ ...data, Description: e?.target?.value });
                }}
                variant="outlined"
                sx={{ ariaLabel: "Description" }}
              />
            </FormControl>
            <FormControl>
              <FormLabel sx={{ width: "fit-content" }} htmlFor="date">
                Date
              </FormLabel>
              <TextField
                id="date"
                type="date"
                name="date"
                required
                fullWidth
                value={data?.Date?.toISOString().slice(0, 10) || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setData({ ...data, Date: new Date(e?.target?.value) });
                }}
                variant="outlined"
                sx={{ ariaLabel: "Date" }}
              />
            </FormControl>
            <FormControl>
              <FormLabel sx={{ width: "fit-content" }} htmlFor="reminderdate">
                Reminder Date
              </FormLabel>
              <TextField
                id="reminderdate"
                type="date"
                name="reminderdate"
                placeholder="John Doe"
                required
                fullWidth
                value={data?.ReminderDate?.toISOString().slice(0, 10) || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setData({
                    ...data,
                    ReminderDate: new Date(e?.target?.value),
                  });
                }}
                variant="outlined"
                sx={{ ariaLabel: "Reminder Date" }}
              />
            </FormControl>
            <FormControl sx={{ gap: "1rem" }}>
              <FormLabel sx={{ width: "fit-content", flexWrap: "wrap" }}>
                Photo{" "}
              </FormLabel>

              {data?.PropertyPhoto ? (
                <Box
                  sx={{
                    width: "100%",
                    maxHeight: "13.375rem",
                    "& img": {
                      // Styles for all img elements within the Box
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    },
                  }}>
                  <img
                    src={URL.createObjectURL(data?.PropertyPhoto)}
                    alt="Uploaded"
                  />
                </Box>
              ) : (
                <Button
                  component="label"
                  role={undefined}
                  variant="outlined"
                  color={"primary"}
                  tabIndex={-1}
                  sx={{
                    height: "13.375rem",
                    borderColor: "rgb(118, 118, 118)",
                    color: "white",
                    borderStyle: "dashed",
                  }}
                  startIcon={<CloudUploadIcon />}>
                  Upload Photos
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(e) => {
                      setData({
                        ...data,
                        PropertyPhoto: e?.target?.files?.[0],
                      });
                    }}
                    accept="image/*"
                    multiple
                  />
                </Button>
              )}
              {data?.PropertyPhoto && (
                <Button
                  tabIndex={-1}
                  component="label"
                  role={undefined}
                  variant="outlined">
                  Change Photo
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(e) => {
                      setData({
                        ...data,
                        PropertyPhoto: e?.target?.files?.[0],
                      });
                    }}
                    accept="image/*"
                    multiple
                  />
                </Button>
              )}
            </FormControl>
            <FormControl>
              <FormLabel
                id="demo-radio-buttons-group-label"
                sx={{ width: "fit-content" }}>
                Property Ownership
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={PropertyOwnership.RENTAL}
                value={data?.PropertyOwnership || ""}
                onChange={(e) => {
                  setData({
                    ...data,
                    PropertyOwnership: e?.target?.value as PropertyOwnership,
                  });
                }}
                name="radio-buttons-group">
                <FormControlLabel
                  value={PropertyOwnership.RENTAL}
                  control={<Radio />}
                  label={"Rental"}
                />
                <FormControlLabel
                  value={PropertyOwnership.OWNER}
                  control={<Radio />}
                  label="Owner"
                />
              </RadioGroup>
            </FormControl>
            <Exterior formData={data} setFormData={setData} />
            <Interior formData={data} setFormData={setData} />
            <LoadingButton
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                mutation.mutate();
              }}
              disabled={
                !data?.FullName ||
                !data?.PhoneNumber ||
                !data?.Address ||
                !data?.Description ||
                !data?.Date ||
                !data?.PropertyOwnership
              }
              loading={mutation.status === "pending"}
              fullWidth
              variant="contained">
              Submit
            </LoadingButton>
          </Box>
        </Card>
      </SignInContainer>
    </Box>
  );
}
const SignInContainer = styled(Stack)(({ theme }) => ({
  height: "100%",

  padding: 20,
  backgroundImage:
    "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
  backgroundRepeat: "no-repeat",
  ...theme.applyStyles("dark", {
    backgroundImage:
      "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
  }),
}));
const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  overflow: "auto",
  maxHeight: "80%",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default Form;
