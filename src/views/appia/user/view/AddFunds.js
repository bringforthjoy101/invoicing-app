import { useState } from 'react'
import { Button, Spinner, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup, Input } from 'reactstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'

import { addFunds, deductFunds, passwordReset, blacklistUser, blacklistUserAsset } from '../store/action'

const AddFundsSchema = Yup.object().shape({
  amount: Yup.number()
    .lessThan(100000, `You cant add funds more than 100000`)
    .required('Amount is required').positive().integer(),
  reason: Yup.string()
    .min(3, "Reason too Short!")
    .max(50, "Reason too Long!")
    .required('Reason is required'),
  user_id: Yup.string().required("required")
})

const BlacklistSchema = Yup.object().shape({
  user_id: Yup.string().required("required"),
  reason: Yup.string().required("required")
})

export const AddFunds = ({ userId, userData }) => {
  const dispatch = useDispatch()
  const [formModal, setFormModal] = useState(false)


  return (
    <div>
      <Button.Ripple className='text-center mb-1' color='primary' outline block onClick={() => setFormModal(!formModal)}>
        Add Funds
      </Button.Ripple>
      <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
        <ModalHeader toggle={() => setFormModal(!formModal)}>Add Funds</ModalHeader>
        <Formik
          initialValues={{
            amount: '',
            reason: '',
            user_id: userId
          }}
          validationSchema={AddFundsSchema}
          onSubmit={async (values, { setSubmitting }) => {
            await dispatch(addFunds(values))
            setSubmitting(false)
            setFormModal(!formModal)
          }}
        >

          {({ errors, touched, isSubmitting }) => (
            <Form>
              <ModalBody>
                <FormGroup>
                  <label htmlFor='amount'>Amount</label>
                  <Field
                    type='number'
                    name='amount'
                    placeholder='Amount'
                    className={`form-control ${errors.amount && touched.amount && 'is-invalid'}`}
                  />
                  <ErrorMessage name='amount' component='div' className='field-error text-danger' />
                </FormGroup>
                <FormGroup>
                  <label htmlFor='reason'>Reason</label>
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
                  <span className='ml-50'>Add Funds</span>
                </Button.Ripple>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  )
}

export const DeductFunds = ({ userId, userData }) => {
  const dispatch = useDispatch()
  const [formModal, setFormModal] = useState(false)

  return (
    <div>
      <Button.Ripple className='text-center mb-1' color='danger' outline block onClick={() => setFormModal(!formModal)}>
        Deduct Funds
      </Button.Ripple>
      <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
        <ModalHeader toggle={() => setFormModal(!formModal)}>Deduct Funds</ModalHeader>
        <Formik
          initialValues={{
            amount: '',
            reason: '',
            user_id: userId
          }}
          validationSchema={AddFundsSchema}
          onSubmit={async (values, { setSubmitting }) => {
            await dispatch(deductFunds(values))
            setSubmitting(false)
            setFormModal(!formModal)
          }}
        >

          {({ errors, touched, isSubmitting }) => (
            <Form>
              <ModalBody>
                <FormGroup>
                  <label htmlFor='amount'>Amount</label>
                  <Field
                    type='number'
                    name='amount'
                    placeholder='Amount'
                    className={`form-control ${errors.amount && touched.amount && 'is-invalid'}`}
                  />
                  <ErrorMessage name='amount' component='div' className='field-error text-danger' />
                </FormGroup>
                <FormGroup>
                  <label htmlFor='reason'>Reason</label>
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
                  <span className='ml-50'>Deduct Funds</span>
                </Button.Ripple>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  )
}

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
