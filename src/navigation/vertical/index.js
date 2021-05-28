// ** Navigation sections imports
// import apps from './apps'
import adminUsers from './admins-users'
// import pages from './pages'
// import forms from './forms'
import tables from './tables'
// import others from './others'
import dashboards from './dashboards'
import miscc from './miscc'
import rewards from './rewards'
// import uiElements from './ui-elements'
// import chartsAndMaps from './charts-maps'

// ** Merge & Export
export default [...dashboards, ...adminUsers, ...rewards, ...miscc, ...tables]
    // ...pages, ...uiElements, ...forms, ...tables, ...chartsAndMaps, ...others]
