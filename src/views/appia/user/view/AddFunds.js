import { useState } from 'react'
import { Button, Spinner, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup, Input } from 'reactstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'

import { passwordReset, blacklistUser, blacklistUserAsset } from '../store/action'


const PasswordResetSchema = Yup.object().shape({
  user_id: Yup.string().required("required")
})

const BlacklistSchema = Yup.object().shape({
  user_id: Yup.string().required("required"),
  reason: Yup.string().required("required")
})


export const PasswordReset = ({ userId }) => {
  const dispatch = useDispatch()
  const [formModal, setFormModal] = useState(false)

  return (
    <div>
      <Button.Ripple className='text-center mb-1' color='primary' outline block onClick={() => setFormModal(!formModal)}>
        Reset User Password
      </Button.Ripple>
      <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
        <ModalHeader toggle={() => setFormModal(!formModal)}>Password Reset</ModalHeader>
        <Formik
          initialValues={{
            user_id: userId
          }}
          validationSchema={PasswordResetSchema}
          onSubmit={async (values, { setSubmitting }) => {
            await dispatch(passwordReset(values))
            setSubmitting(false)
            setFormModal(!formModal)
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <ModalBody>
                <FormGroup>
                  <label htmlFor='user_id'>User Id</label>
                  <Field
                    type='text'
                    name='user_id'
                    placeholder='UserId'
                    className={`form-control ${errors.user_id && touched.user_id && 'is-invalid'}`}
                  />
                  <ErrorMessage name='user_id' component='div' className='field-error text-danger' />
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button.Ripple color='primary' type='submit' disabled={isSubmitting}>
                  {isSubmitting && <Spinner color='white' size='sm' />}
                  <span className='ml-50'>Reset</span>
                </Button.Ripple>
              </ModalFooter>
            </Form>
          )}
          </Formik>
        </Modal>
    </div>
  )
}

export const BlacklistUser = ({ userId }) => {
  const dispatch = useDispatch()
  const [formModal, setFormModal] = useState(false)

  return (
    <div>
      <Button.Ripple className='text-center mb-1' color='danger' outline block onClick={() => setFormModal(!formModal)}>
        Blacklist User
      </Button.Ripple>
      <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
        <ModalHeader toggle={() => setFormModal(!formModal)}>Blacklist</ModalHeader>
        <Formik
          initialValues={{
            user_id: userId,
            reason: ""
          }}
          validationSchema={BlacklistSchema}
          onSubmit={async (values, { setSubmitting }) => {
            await dispatch(blacklistUser(values))
            setSubmitting(false)
            setFormModal(!formModal)
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <ModalBody>
                <FormGroup>
                  <label htmlFor='user_id'>User Id</label>
                  <Field
                    type='text'
                    name='user_id'
                    placeholder='UserId'
                    className={`form-control ${errors.user_id && touched.user_id && 'is-invalid'}`}
                  />
                  <ErrorMessage name='user_id' component='div' className='field-error text-danger' />
                </FormGroup>
                <FormGroup>
                  <label htmlFor='user_id'>Reason</label>
                  <Field
                    type='text'
                    name='reason'
                    placeholder='Reason'
                    className={`form-control ${errors.reason && touched.reason && 'is-invalid'}`}
                  />
                  <ErrorMessage name='reason' component='div' className='field-error text-danger' />
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button.Ripple color='primary' type='submit' disabled={isSubmitting}>
                  {isSubmitting && <Spinner color='white' size='sm' />}
                  <span className='ml-50'>Blacklist</span>
                </Button.Ripple>
              </ModalFooter>
            </Form>
          )}
          </Formik>
        </Modal>
    </div>
  )
}

export const BlacklistUserAsset = ({ userId, phone }) => {
  const dispatch = useDispatch()
  const [formModal, setFormModal] = useState(false)

  return (
    <div>
      <Button.Ripple className='text-center mb-1' color='secondary' outline block onClick={() => setFormModal(!formModal)}>
        Blacklist User Asset
      </Button.Ripple>
      <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
        <ModalHeader toggle={() => setFormModal(!formModal)}>Blacklist Asset</ModalHeader>
        <Formik
          initialValues={{
            user_id: userId,
            reason: ""
          }}
          validationSchema={BlacklistSchema}
          onSubmit={async (values, { setSubmitting }) => {
            await dispatch(blacklistUserAsset(values, phone))
            setSubmitting(false)
            setFormModal(!formModal)
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <ModalBody>
                <FormGroup>
                  <label htmlFor='user_id'>User Id</label>
                  <Field
                    type='text'
                    name='user_id'
                    placeholder='UserId'
                    className={`form-control ${errors.user_id && touched.user_id && 'is-invalid'}`}
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor='user_id'>Reason</label>
                  <Field
                    type='text'
                    name='reason'
                    placeholder='Reason'
                    className={`form-control ${errors.reason && touched.reason && 'is-invalid'}`}
                  />
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button.Ripple color='primary' type='submit' disabled={isSubmitting}>
                  {isSubmitting && <Spinner color='white' size='sm' />}
                  <span className='ml-50'>Blacklist Asset</span>
                </Button.Ripple>
              </ModalFooter>
            </Form>
          )}
          </Formik>
        </Modal>
    </div>
  )
}
// export default AddFunds
