import styles from "./WorkSpace.module.css"
import displayOptions from "../../utils/MenuOptions";
import HorizontalShadow from "../SvgComponents/HorizontalShadow";

const WorkSpace = ({display}) => {

    const item = displayOptions().find(item => item.id === display );

    return(
        <div className={styles.workSpace}>
            <HorizontalShadow id={styles.shadow}/>
            {item.component}
            <label id={styles.label}>ACTIVIA S.A. ES UNA EMPRESA CERTIFICADA POR NORMAS DE CALIDAD ISO 9001:2015</label>
        </div>
    )
}
export default WorkSpace;