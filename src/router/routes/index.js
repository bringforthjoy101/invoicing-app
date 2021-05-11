// ** Routes Imports
import AppiaRoutes from './Appia'
import PagesRoutes from './Pages'
import DashboardRoutes from './Dashboards'

// ** Document title
const TemplateTitle = '%s - Appia React Admin Template'

// ** Default Route
const DefaultRoute = '/dashboard/ecommerce'

// ** Merge Routes
const Routes = [
  ...DashboardRoutes,
  ...AppiaRoutes,
  ...PagesRoutes
]

export { DefaultRoute, TemplateTitle, Routes }
