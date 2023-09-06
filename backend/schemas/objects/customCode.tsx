import { MdCode } from 'react-icons/md';

export default {
  name: 'customCode',
  title: 'Code',
  type: 'object',
  icon: MdCode,
  fields: [
    {
      name: 'code',
      title: 'Code',
      type: 'code', // You can use 'text' or 'string' for code content
    },
  ],
  preview: {
    select: {
      title: 'code.code',
    },
  },
};
