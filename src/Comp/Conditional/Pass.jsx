import Invalid from "./Invalid";
import Valid from "./Valid";

const Pass = ({ isValid }) => {
  //   if (isValid) {
  //     return <Valid />;
  //   }
  //   return <Invalid />;

  return isValid ? <Valid /> : <Invalid />;
};

export default Pass;
