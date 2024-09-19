import {
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

function Exterior({ formData, setFormData }: Props) {
  const exteriorData = formData?.ExteriorFields;
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
      <FormLabel sx={{ width: 'fit-content' }}>Exterior</FormLabel>
      <StyledFormGroup>
        <FormControlLabel
          control={
            <Checkbox
              inputProps={{ 'aria-label': 'controlled' }}
              name='roof'
              checked={exteriorData?.Roof || false}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormData({
                  ...formData,
                  ExteriorFields: { ...exteriorData, Roof: e.target.checked },
                });
              }}
            />
          }
          label='Roof'
        />
        <FormControlLabel
          control={
            <Checkbox
              inputProps={{ 'aria-label': 'controlled' }}
              checked={exteriorData?.BrickWall || false}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormData({
                  ...formData,
                  ExteriorFields: {
                    ...exteriorData,
                    BrickWall: e.target.checked,
                  },
                });
              }}
            />
          }
          label='Brick Wall'
        />
        <FormControlLabel
          control={
            <Checkbox
              inputProps={{ 'aria-label': 'controlled' }}
              checked={exteriorData?.Floor || false}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormData({
                  ...formData,
                  ExteriorFields: { ...exteriorData, Floor: e.target.checked },
                });
              }}
              name='floor'
            />
          }
          label='Floor'
        />{' '}
        <FormControlLabel
          control={
            <Checkbox
              inputProps={{ 'aria-label': 'controlled' }}
              checked={exteriorData?.Eaves || false}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormData({
                  ...formData,

                  ExteriorFields: { ...exteriorData, Eaves: e.target.checked },
                });
              }}
              name='eaves'
            />
          }
          label='Eaves'
        />
        <FormControlLabel
          control={
            <Checkbox
              inputProps={{ 'aria-label': 'controlled' }}
              checked={exteriorData?.Facia || false}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormData({
                  ...formData,
                  ExteriorFields: { ...exteriorData, Facia: e.target.checked },
                });
              }}
              name='facia'
            />
          }
          label='Facia'
        />
        <FormControlLabel
          control={
            <Checkbox
              inputProps={{ 'aria-label': 'controlled' }}
              checked={exteriorData?.Render || false}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormData({
                  ...formData,

                  ExteriorFields: { ...exteriorData, Render: e.target.checked },
                });
              }}
              name='render'
            />
          }
          label='Render'
        />
        <FormControlLabel
          control={
            <Checkbox
              inputProps={{ 'aria-label': 'controlled' }}
              checked={exteriorData?.Gutter || false}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormData({
                  ...formData,
                  ExteriorFields: { ...exteriorData, Gutter: e.target.checked },
                });
              }}
              name='gutter'
            />
          }
          label='Gutter'
        />
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
export default Exterior;
