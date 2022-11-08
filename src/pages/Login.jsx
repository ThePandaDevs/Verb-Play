import {LeftContentLogin} from "../components/login_components/LeftContentLogin";
import {RightContentLogin} from "../components/login_components/RightContentLogin";

export const Login = () => {
  return(
      <div className="grid h-screen place-items-center">
          <div className="grid sm:grid-cols-1 md:grid-cols-2">
              <LeftContentLogin/>
              <RightContentLogin/>
          </div>
      </div>
  )
}