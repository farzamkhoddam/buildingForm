import {
  Box,
  FormControl,
  FormLabel,
  styled,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from '@mui/material';
import { FormType } from '../interfaces/FormTypes';

interface Props {
  formData: FormType;
  setFormData: React.Dispatch<React.SetStateAction<FormType>>;
}

function Interior({ formData, setFormData }: Props) {
  const interiorData = formData?.InteriorFields;

  const FloorClickHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      InteriorFields: {
        ...interiorData,
        Shower: e.target.checked,
        Room: e.target.checked,
      },
    });
  };

  const ShowerClickHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      InteriorFields: {
        ...interiorData,
        Shower: e.target.checked,
      },
    });
  };

  const RoomClickHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      InteriorFields: {
        ...interiorData,
        Room: e.target.checked,
      },
    });
  };

  return (
    <FormControl
      component='fieldset'
      sx={{
        display: 'flex',
        justifyContent: 'start',
        borderRadius: '15px',
        padding: '1rem',
        boxShadow: 'inset 1px 1px 6px 0px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'rgb(64 64 64 /1)',
      }}
      variant='standard'
    >
      <FormLabel sx={{ width: 'fit-content' }}>Interior</FormLabel>
      <StyledFormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={interiorData?.Timberwork || false}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormData({
                  ...formData,
                  InteriorFields: {
                    ...interiorData,
                    Timberwork: e.target.checked,
                  },
                });
              }}
              name='timberwork'
            />
          }
          label='Timber Work'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={interiorData?.Wall || false}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormData({
                  ...formData,
                  InteriorFields: {
                    ...interiorData,
                    Wall: e.target.checked,
                  },
                });
              }}
              name='wall'
            />
          }
          label='Wall'
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <FormControlLabel
            label='Roof'
            control={
              <Checkbox
                checked={(interiorData?.Room && interiorData?.Shower) || false}
                indeterminate={
                  interiorData?.Room !== interiorData?.Shower || false
                }
                onChange={FloorClickHandler}
              />
            }
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              paddingLeft: '1rem',
              borderLeft: '1px solid rgba(255, 255, 255, 0.7)',
            }}
          >
            <FormControlLabel
              label='Shower'
              control={
                <Checkbox
                  checked={interiorData?.Shower || false}
                  onChange={ShowerClickHandler}
                />
              }
            />
            <FormControlLabel
              label='Room'
              control={
                <Checkbox
                  checked={interiorData?.Room || false}
                  onChange={RoomClickHandler}
                />
              }
            />
          </Box>
        </Box>
      </StyledFormGroup>
    </FormControl>
  );
}
const StyledFormGroup = styled(FormGroup)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.5rem',
  flexWrap: 'wrap',
  '& .MuiFormControlLabel-root': {
    width: 'fit-content',
    m: 0,
    p: 0,
  },
}));
export default Interior;
