import React, { useContext, useState } from 'react';
import { useFormik, FormikProps } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import * as yup from 'yup';

import { ROOT, QUIZ } from '../../../utils/constants/routes.constants';
import InternalContainer from '../../layout/InternalGrid';
import Input from '../../inputs/Input';
import Button from '../../inputs/Button';
import ClientContext from '../../../contexts/ClientContext';

interface MyValues { 
  name: string 
}

const validationSchema = yup.object({
  name: yup
    .string()
    .matches(/^[A-Za-z ]*$/,'This field needs to be a valid word 🤔')
    .max(20, 'You need to enter a name with less than 20 characters')
    .required("You must fill this field to continue ✌")
});

const FormsPrepare: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState<boolean>(false);
  const { setName } = useContext(ClientContext);

  const formik: FormikProps<MyValues> = useFormik<MyValues>({
    initialValues: {
      name: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      setTimeout(() => {
        setName(values.name);
        setLoading(false);
        navigate(QUIZ);
      }, 500);
    },
  });

  return (
    <InternalContainer>
      <form onSubmit={formik.handleSubmit}>

        <Grid container spacing={2} mt={3}>
          <Grid item xs={12} md={8.5}>
            <Input
              id="name"
              name="name"
              label="What is your name?"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />

            <Grid container spacing={2} mt={0.1}> 
              <Grid item xs={4}>
                <Button
                  typeStyle="text" 
                  variant="outlined"
                  text="Cancel"
                  onClick={() => {
                    formik.resetForm();
                    navigate(ROOT);
                  }}
                />
              </Grid>

              <Grid item xs={8}>
                <Button
                  typeStyle="text" 
                  variant="contained"
                  type="submit"
                  text="Start"
                  loading={isLoading}
                />
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </form>
    </InternalContainer>
  );
}

export default FormsPrepare;