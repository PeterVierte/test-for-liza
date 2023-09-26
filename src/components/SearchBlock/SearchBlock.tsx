import s from './searchBloack.module.scss';
import icon from '../../assets/img/search.svg';
const SearchBlock = () => {
    return (
        <div className={s.inputWrapper}>
            <input type="text" placeholder='Поиск по названию статьи'/>
            <img src={icon} alt=""/>
        </div>
    );
};

export default SearchBlock;