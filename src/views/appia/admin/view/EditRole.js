import { useState } from 'react'
import { Button, Spinner, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup, Input } from 'reactstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'


export const EditRole = ({ open, openButton }) => {
  const [userData, setUserData] = useState({
    role: ''
  })
  const [formModal, setFormModal] = useState(false)

  const onSubmit = async (event, errors) => {
    // if (!errors.length) {
    //   toggleSidebar()
    // }
    event.preventDefault()
    console.log({errors})
    if (errors && !errors.length) {
      console.log({userData})
      const body = JSON.stringify(userData)
      try {
        const response = await apiRequest({url:'/admin/register', method:'POST', body}, dispatch)
        console.log({response})
        if (response) {
          if (response.data.success) {
            swal('Great job!', response.data.message, 'success')
            dispatch(getAllData())
            toggleSidebar()
          } else {
            swal('Oops!', response.data.message, 'error')
          }
        } else {
          swal('Oops!', 'Something went wrong with your network.', 'error')
        }
        
      } catch (error) {
        console.error({error})
      }
    }
  }

  return (
    <div>
      <Button.Ripple className='text-center mb-1' color='primary' outline block onClick={() => setFormModal(!formModal)}>
        Add Funds
      </Button.Ripple>
      <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
        <ModalHeader toggle={() => setFormModal(!formModal)}>Change Role</ModalHeader>
        <AvForm onSubmit={onSubmit}>
          <ModalBody>
            <FormGroup>
              <Label for='role'>User Role</Label>
              <AvInput
                type='select'
                id='role'
                name='role'
                value={userData.role}
                onChange={e => setUserData({ ...userData, role: e.target.value })}
                required
              >
                <option value='4'>Control Admin</option>
                <option value='3'>Super Admin</option>
                <option value='2'>Customer Support</option>
                <option value='1'>Admin</option>
              </AvInput>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button.Ripple color='primary' type='submit'>
              {/* {isSubmitting && <Spinner color='white' size='sm' />} */}
              <span className='ml-50'>Change Role</span>
            </Button.Ripple>
          </ModalFooter>
        </AvForm>

      </Modal>
    </div>
  )
}
export default EditRole
