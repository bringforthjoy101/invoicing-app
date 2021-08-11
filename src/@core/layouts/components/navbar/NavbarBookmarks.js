// ** React Imports
import { Fragment, useEffect, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

const NavbarBookmarks = props => {
  const route = useRouteMatch()

  return (
    <Fragment>
      {" "}
      {route && route.url === "/appia/admin/list" ? (
        <h2>Admin List</h2>
      ) : route && route.url === "/appia/admin/view" ? (
        <h2>Admin Activites Details</h2>
      )  : route && route.url === "/appia/user/list" ? (
        <h2>Users List</h2>
      ) : route && route.url === "/appia/user/view" ? (
        <h2>User Activites Details</h2>
      ) : route && route.url === "/appia/dataPlans/list" ? (
        <h2>Data Plan List</h2>
      ) : route && route.url === "/appia/dataPlans/view" ? (
        <h2>Data Plan Details</h2>
      )  : route && route.url === "/appia/allRewardItems/list" ? (
        <h2>All Reward Items List</h2>
      )  : route && route.url === "/appia/allRewardItems/view" ? (
        <h2>All Reward Items Details</h2>
      )  : route && route.url === "/appia/claimedRewards/list" ? (
        <h2>Claimed Rewards List</h2>
      ) : route && route.url === "/appia/claimedRewards/view" ? (
        <h2>User Claimed Rewards Details</h2>
      )  : route && route.url === "/appia/contact/list" ? (
        <h2>Contact Us List</h2>
      ) : route && route.url === "/appia/contacts/view" ? (
        <h2>Contact Us Details</h2>
      ) : route && route.url === "/appia/feedbacks/list" ? (
        <h2>Users Feedbacks List</h2>
      ) : route && route.url === "/appia/feedbacks/view" ? (
        <h2>Users Feedbacks Details</h2>
      ) : route && route.url === "/appia/subscribers/list" ? (
        <h2>Subscribers List</h2>
      ) : route && route.url === "/appia/funds/list" ? (
        <h2>Funds List</h2>
      ) : route && route.url === "/appia/funds/view" ? (
        <h2>Funds Details</h2>
      )  : route && route.url === "/appia/withdrawal/list" ? (
        <h2>Withdrawal List</h2>
      )  : route && route.url === "/appia/transfers/list" ? (
        <h2>Users Bank Transfers List</h2>
      ) : route && route.url === "/appia/transfers/view" ? (
        <h2>User Bank Transfer Details</h2>
      )  : route && route.url === "/appia/escrow/list" ? (
        <h2>Users Escrows List</h2>
      )  : route && route.url === "/appia/escrow/view" ? (
        <h2>User Escrows Activities Details</h2>
      ) : route && route.url === "/appia/settings/list" ? (
        <h2>Settings List</h2>
      ) : (
        <h2>Dashboard Analytics</h2>
      )}
    </Fragment>
  )
}

export default NavbarBookmarks
