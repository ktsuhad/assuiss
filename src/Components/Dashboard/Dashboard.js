import React from 'react';
import CheckingAccountChart from './Components/CheckingAccount';
import InvoiceChart from './Components/InvoiceChart';
import TotalCashFlow from './Components/TotalCashFlow';
import AccountWatchlist from './Components/AccountWatchlist';
import Grid from '@mui/material/Grid';

const Dashboard = () => {
  return (
    <Grid
      container
      spacing={2}
      style={{
        backgroundColor: '#f6f7f9',
        minHeight: 'calc(100vh - 114px)',
        padding: '25px',
      }}
    >
      <Grid item xs={12} md={6}>
        <div style={{ backgroundColor: '#ffffff', borderRadius: '10px',  height:'400px'}}>
          <CheckingAccountChart />
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div style={{ backgroundColor: '#ffffff', borderRadius: '10px' ,  height:'400px'}}>
          <InvoiceChart />
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div style={{ backgroundColor: '#ffffff', borderRadius: '10px' ,  height:'400px'}}>
          <TotalCashFlow />
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div style={{ backgroundColor: '#ffffff', borderRadius: '10px' ,  height:'400px'}}>
          <AccountWatchlist />
        </div>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
