import classes from './summary.module.css';

export default function MealSummary() {
  return (
    <section className={classes.summary} >
        <h2>We deliver Delicous Meals</h2>
        <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  )
}

