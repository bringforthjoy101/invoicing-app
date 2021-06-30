import { Fragment, useState, useEffect } from 'react'
// ** User List Component
import Settings from './SettingsDetails'

// ** Styles
import '@styles/react/apps/app-users.scss'

// ** Store & Actions
import { getAllData } from '../store/action'
import { useDispatch, useSelector } from 'react-redux'

const SettingsLIst = () => {
  const dispatch = useDispatch()
  const store = useSelector(state => state.appiaSettings)

  useEffect(() => {
    dispatch(getAllData())
  }, [dispatch])

  return (
    <div className='app-user-list'>
      <Settings allData={store.allData} />
    </div>
  )
}

export default SettingsLIst
