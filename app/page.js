import Home from './@home/index'
import classes from './page.module.css'
import './globals.css'
import 'animate.css'

export default function Page() {


  return (
    <main className={classes.main}>
      <Home />
    </main>
  )
}
