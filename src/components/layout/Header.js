
import banner from '../../assets/banner.jpg';
import classes from './header.module.css';
import HeaderCartButton from './HeaderCartButton';


export default function Header(props) {
  return (
    <>
    <header className={classes.header} >
       <h1>DumMeals</h1>
      <HeaderCartButton onShowCart={props.onShowCart} />
    </header>
    <div className={classes['main-image']}>
        <img src={banner} alt="mealimg" />
    </div>
    </>
  )
}
