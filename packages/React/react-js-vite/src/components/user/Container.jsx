import { Paper } from "@material-ui/core";
import PropeTyes from "prop-types";

export const Container = ({ background, padding = 0, children }) => {
  return (
    <Paper style={{ margin: "5px 0", background, padding: `${padding}px` }}>
      {children}
    </Paper>
  );
};
Container.propTypes = {
    background:PropeTyes.string,
    padding:PropeTyes.number,
    children:PropeTyes.func 
}