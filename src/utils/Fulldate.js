import { format } from 'date-fns';

const Fulldate = ({ date }) => {
  return format(new Date(date), 'MMMM dd, yyyy');
};

export default Fulldate;