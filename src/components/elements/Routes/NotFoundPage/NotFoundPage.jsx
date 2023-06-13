import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
    return ( 
        <div className={styles.notFound}>
            <h1>Page is not found, sorry</h1>
            <i class='bx bxs-dizzy'></i>
        </div>
     );
}
 
export default NotFoundPage;