import {LeftContentRegister} from "../components/register_components/LeftContentRegister";
import {RightContentRegister} from "../components/register_components/RightContentRegister";

export const Register = () => {
  return(
      <div className="grid h-screen place-items-center">
          <div className="grid sm:grid-cols-1 md:grid-cols-2">
              <LeftContentRegister/>
              <RightContentRegister/>
          </div>
      </div>
  )
}