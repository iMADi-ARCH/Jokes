import Image from "next/image";
import styles from "./laugh.module.css";

export default function Laugh() {
    return (
        <Image className={styles.img} src="/laugh.svg" alt="Laughing emoji" width={32} height={32} />
    )
}