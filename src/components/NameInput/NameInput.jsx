import { Formik, Field } from 'formik';
import swal from 'sweetalert';

import { FormEl } from './NameInput.styled';

const initialValues = {
  name: '',
  number: '',
};

export function NameInput({ addstate, state }) {
  const handleSubmit = (values, { resetForm }) => {
    let check = state.contacts.find(e => e.name === values.name);

    if (check === undefined) {
      resetForm();

      addstate(values);
    } else {
      swal(`"${values.name}" is alredy in contacts`, '', 'warning');
    }
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <FormEl>
          <label htmlFor="name">
            Name
            <Field type="text" name="name" placeholder="Name" />
          </label>
          <label htmlFor="number">
            Number
            <Field
              type="number"
              name="number"
              placeholder="Number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </FormEl>
      </Formik>
    </>
  );
}
