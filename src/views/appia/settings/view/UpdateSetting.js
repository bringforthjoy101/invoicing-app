import { useState } from 'react'
import { Button, Spinner, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup } from 'reactstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'

import { updateSetting } from '../store/action'

const UpdateSettingSchema = Yup.object().shape({
  id: Yup.number().required('Id is required'),
  name: Yup.string().required('Name is required'),
  value: Yup.string().required("Value isrequired"),
  description: Yup.string().required("Description isrequired")
})

export const UpdateSetting = () => {
  const dispatch = useDispatch()
  const [formModal, setFormModal] = useState(false)


  return (
    <div>
      <Button.Ripple className='text-center mb-1' color='primary' outline block onClick={() => setFormModal(!formModal)}>
        Update Setting
      </Button.Ripple>
      <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
        <ModalHeader toggle={() => setFormModal(!formModal)}>Update Setting</ModalHeader>
        <Formik
          initialValues={{
                id: '',
                name: '',
                value: '',
                description: ''
          }}
          validationSchema={UpdateSettingSchema}
          onSubmit={async (values, { setSubmitting }) => {
            await dispatch(updateSetting({payload:[values]}))
            setSubmitting(false)
            setFormModal(!formModal)
          }}
        >

          {({ errors, touched, isSubmitting, values }) => (
            <Form>
              <ModalBody>
                <FormGroup>
                  <label htmlFor='id'>Setting Id</label>
                  <Field
                    type='number'
                    name='id'
                    placeholder='id'
                    className={`form-control ${errors.id && touched.id && 'is-invalid'}`}
                  />
                  <ErrorMessage name='id' component='div' className='field-error text-danger' />
                </FormGroup>
                <FormGroup>
                  <label htmlFor='name'>Name</label>
                  <Field
                    type='text'
                    name='name'
                    placeholder='Name'
                    className={`form-control ${errors.name && touched.name && 'is-invalid'}`}
                  />
                  <ErrorMessage name='name' component='div' className='field-error text-danger' />
                </FormGroup>
                <FormGroup>
                  <label htmlFor='value'>Value</label>
                  <Field
                    type='text'
                    name='value'
                    placeholder='Value'
                    className={`form-control ${errors.value && touched.value && 'is-invalid'}`}
                  />
                  <ErrorMessage name='value' component='div' className='field-error text-danger' />
                </FormGroup>
                <FormGroup>
                  <label htmlFor='description'>Description</label>
                  <Field
                    type='text'
                    name='description'
                    placeholder='Description'
                    className={`form-control ${errors.description && touched.description && 'is-invalid'}`}
                  />
                  <ErrorMessage name='description' component='div' className='field-error text-danger' />
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button.Ripple color='primary' type='submit' disabled={isSubmitting}>
                  {isSubmitting && <Spinner color='white' size='sm' />}
                  <span className='ml-50'>Update</span>
                </Button.Ripple>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  )
}


export default UpdateSetting
