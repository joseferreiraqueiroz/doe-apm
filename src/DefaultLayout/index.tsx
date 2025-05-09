import { Outlet } from "react-router-dom"
import { DefaultLayoutComponent } from "./styles"

const DefaultLayout = () => {
  return (
    <DefaultLayoutComponent>
      <Outlet/>
    </DefaultLayoutComponent>
  )
}

export default DefaultLayout