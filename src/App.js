import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import MobileDatePicker from '@material-ui/lab/MobileDatePicker';
import MobileTimePicker from '@material-ui/lab/MobileTimePicker';

function App() {
  const [value, setValue] = React.useState(new Date('2021-08-20 23:59:59'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          inputFormat='yyyy/MM/dd'
          value={value}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField
              {...params}
              variant='standard'
              InputProps={{
                disableUnderline: true,
                style: {
                  color: '#5b9872',
                  fontSize: '18px',
                  fontWeight: 'bold',
                },
              }}
            />
          )}
          disableHighlightToday
          maxDate={new Date('2021-08-21')}
          minDate={new Date('2021-08-20')}
          showToolbar={false}
        />
        <MobileTimePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant='standard'
              InputProps={{
                disableUnderline: true,
                style: {
                  color: '#5b9872',
                  fontSize: '18px',
                  fontWeight: 'bold',
                },
              }}
            />
          )}
          maxTime={new Date('2021-08-21 06:11:00')}
          minTime={new Date('2021-08-21 01:11:00')}
          ampm={false}
        />
      </LocalizationProvider>
    </>
  );
}

export default App;
