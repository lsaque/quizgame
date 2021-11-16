import React, { useContext, useState } from 'react';
import { useFormik, FormikProps } from 'formik';
import { useNavigate } from 'react-router-dom';
import { FormControl, Grid, RadioGroup } from '@mui/material';
// import * as yup from 'yup';

import InternalContainer from '../../layout/InternalGrid';
import ControlLabel from '../../feedback/ControlLabel';
import ApiContext from '../../../contexts/ApiContext';

interface MyValues { 
  answers: string[],
}

// const validationSchema = yup.object({
//   name: yup
//     .string()
//     .matches(/^[A-Za-z ]*$/,'This field needs to be a valid word 🤔')
//     .max(20, 'You need to enter a name with less than 20 characters')
//     .required("You must fill this field to continue ✌")
// });

interface IFormsAnswersProps{
  data: string[],
}

const FormsAnswers: React.FC<IFormsAnswersProps> = ({ data }) => {
  // const navigate = useNavigate();
  // const [isLoading, setLoading] = useState<boolean>(false);
  // const { setClientState } = useContext(ApiContext);

  const formik: FormikProps<MyValues> = useFormik<MyValues>({
    initialValues: {
      answers: [],
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      // setLoading(true);
      // setTimeout(() => {
      //   setClientState({name: values.name});
      //   setLoading(false);
      //   navigate(QUIZ);
      // }, 500);
    },
  });

  return (
    <InternalContainer>
      <form onSubmit={formik.handleSubmit}>

        <Grid container spacing={2} mt={3}>
          <Grid item xs={12}>

            <FormControl component="fieldset">
              <RadioGroup 
                aria-label="answers"
                name="answers"
                // value={formik.values.answers}
                // onChange={(event) => formik.setFieldValue(formik.values.answers, event.target.value)}
              >
                {data.map((item, index) => (
                  <ControlLabel key={index} value={item} />
                ))}
                <ControlLabel value="Correct answer" />
              </RadioGroup>
            </FormControl>

          </Grid>
        </Grid>
      </form>
    </InternalContainer>
  );
}

export default FormsAnswers;