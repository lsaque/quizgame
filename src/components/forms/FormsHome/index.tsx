import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import ArrowRight from '@mui/icons-material/EastRounded';

import { FooterModeContext } from '../../../contexts/FooterModeContext';
import InternalContainer from '../../layout/InternalGrid';
import Input from '../../inputs/Input';
import ButtonIcon from '../../inputs/ButtonIcon';
import { NOT_FOUND } from '../../../utils/constants/routes.constants';

const FormsHome: React.FC = () => {

  const { setState: setGlobalState } = useContext(FooterModeContext);
  const handleSubmit = () => setGlobalState({ isPagination: true });

  return (
    <InternalContainer>
      <Grid container spacing={2} mt={3}>
        <Grid item xs={9.6}>
          <Input
            label="How many questions?"
            type="number"
          />
        </Grid>

        <Grid item xs={2.4}
          sx={{
            display: { xs: 'flex', md: 'block' },
            justifyContent: 'flex-end',
          }}
        >
          <ButtonIcon 
            onClick={async () => handleSubmit()} 
            icon={<ArrowRight/>}
            href={NOT_FOUND}
          />
        </Grid>
      </Grid>
    </InternalContainer>
  );
}

export default FormsHome;