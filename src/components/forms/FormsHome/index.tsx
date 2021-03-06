import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik, FormikProps } from 'formik';
import { Grid } from '@mui/material';
import ArrowRight from '@mui/icons-material/EastRounded';
import * as yup from 'yup';

import { PREPARE } from '../../../utils/constants/routes.constants';
import { getQuestions } from '../../../services/lib/methods';

import InternalContainer from '../../layout/InternalGrid';
import Input from '../../inputs/Input';
import Button from '../../inputs/Button';

import ApiContext from '../../../contexts/ApiContext';
import FooterModeContext from '../../../contexts/FooterModeContext';

interface MyValues { 
  numberQuestions: string 
}

const validationSchema = yup.object({
  numberQuestions: yup
    .number()
    .max(50, 'You have a limit of 50 questions 😪')
    .positive('This field needs to be greater than 0 👍')
    .integer('This field needs to be integer 🤔')
    .required("You must fill this field to continue ✌")
    .transform(value => (isNaN(value) ? undefined : value))
});

const FormsHome: React.FC = () => {
  const navigate = useNavigate();
  const mobileDisplay = { display: { xs: 'flex', md: 'block' }, justifyContent: 'flex-end' };
  const [isLoading, setLoading] = useState<boolean>(false);
  const { setApiState } = useContext(ApiContext);
  const { setMaxSteps } = useContext(FooterModeContext);
  
  const formik: FormikProps<MyValues> = useFormik<MyValues>({
    initialValues: {
      numberQuestions: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      setTimeout(() => {
        getQuestions(values.numberQuestions)
        .then(function(response){
            setApiState(response.data);
            setMaxSteps(response.data.results.length);
          }).finally(() => {
            setLoading(false);
            navigate(PREPARE);
          });
      }, 500)
    },
  });

  return (
    <InternalContainer>
      <form onSubmit={formik.handleSubmit}>

        <Grid container spacing={2} mt={3} sx={{ justifyContent: { xs: 'space-between', md: 'start' } }}>
          <Grid item xs={9.6} sm={10.3}>
            <Input
              id="numberQuestions"
              name="numberQuestions"
              label="How many questions?"
              type="number"
              value={formik.values.numberQuestions}
              onChange={formik.handleChange}
              error={formik.touched.numberQuestions && Boolean(formik.errors.numberQuestions)}
              helperText={formik.touched.numberQuestions && formik.errors.numberQuestions}
            />
          </Grid>

          <Grid item xs={1} sx={mobileDisplay}>
            <Button
              type="submit"
              typeStyle="icon"
              variant="contained"
              icon={<ArrowRight/>}
              loading={isLoading}
            />
          </Grid>
        </Grid>

      </form>
    </InternalContainer>
  );
}

export default FormsHome;