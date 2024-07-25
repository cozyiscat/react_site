import { HeaderCart } from "./HeaderCart";
import { HeaderGnb } from "./HeaderGnb";
import { HeaderLogin } from "./HeaderLogin";

export function HeaderBottom(){
    return(
        <>
         <HeaderLogin/>
         <HeaderGnb/>
         <HeaderCart/>
        </>
    )
}