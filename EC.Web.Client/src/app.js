import React from 'react';
import {render} from 'react-dom';
import Layout from './Shared/Layout' ;
import {theme} from './Utility/styles.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const renderRoot = document.getElementById('root');

render(
<MuiThemeProvider theme={theme}>
   <Layout/>
</MuiThemeProvider>
,renderRoot)
