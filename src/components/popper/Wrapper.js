import classNames from "classnames/bind";
import styles from "./Wrapper.module.scss";

const cx = classNames.bind(styles);

function Wrapper({ children, classname }) {
  return <div className={cx("wrapper", classname)}>{children}</div>;
}

export default Wrapper;
