// ** Navigation sections imports
import invoice from './invoice'
import admins from './admins'
import users from './users'
// import pages from './pages'
// import forms from './forms'
// import tables from './tables'
// import others from './others'
import dashboards from './dashboards'
import customerSupport from './customerSuppport'
import funds from './funds.js'
import rewards from './rewards'
import transaction from './transaction'
import settings from './settings'
import escrow from './escrow'
// import uiElements from './ui-elements'
// import chartsAndMaps from './charts-maps'

// ** Merge & Export
export default [...dashboards, ...invoice, ...admins, ...users, ...rewards, ...customerSupport, ...funds, ...escrow, ...transaction, ...settings]
    // ...transaction, 
    // ...escrow, ...settings]
    // ...pages, ...uiElements, ...forms, ...tables, ...chartsAndMaps, ...others]
