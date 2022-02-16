import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";


export default function AppRouter () {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/:passport" component={LoginPage}/>
            </Switch>
        </BrowserRouter>
    )
}