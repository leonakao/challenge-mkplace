import * as yup from 'yup';

export default yup.object().shape({
  name: yup.string().required(),
  brand: yup.string().required(),
  price: yup.number().required().positive(),
  seller: yup.string().required(),
});
