import s from './titleBlock.module.scss';
const TitleBlock = () => {
    return (
        <div className={s.titleBlock}>
            <h1>Блог</h1>
            <h2>Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные
                статьи</h2>
        </div>
    );
};

export default TitleBlock;