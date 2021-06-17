import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import LearnUseCallback from './UseCallback/learnUseCallback'
import LearnUseReducer from './useRducer/learnUseReducer'
import LearnUseMemo from './UseMemo/LearnUseMemo'
import CustomHooks from './CustomHooks/CustomHooks'

const app = () => {
    return (
        <BrowserRouter>
            <div>
                <div style={{ display:"flex", justifyContent: "space-between" }}>
                    <Link to="/UseReducer">useReducer</Link>
                    <Link to="/useRef">useRef</Link>
                    <Link to="/useMemo">useMemo</Link>
                    <Link to="/useCallback">useCallback</Link>
                    <Link to="/customHooks">Custom Hooks</Link>
                    <Link to="/useContext">useContext</Link>
                </div>
                <Switch>
                    <Route exact path="/UseReducer"> <LearnUseReducer /> </Route>
                    <Route path="/useRef" ></Route>
                    <Route exact path="/useMemo"> <LearnUseMemo /> </Route>
                    <Route exact path="/useCallback"> <LearnUseCallback /> </Route>
                    <Route exact path="/customHooks"> < CustomHooks /> </Route>
                    <Route exact path="/useContext"></Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default app
