import {Layout} from "antd";
import React, {useReducer, useEffect} from "react";
import {Routes, Route, Link, useNavigate, Navigate} from "react-router-dom";
import Reserve from "./Reserve.jsx";
import HomePage from "./HomePage.jsx";
import Confirmed from "./Confirmed.jsx";

const {Content} = Layout;

const MyContent=({colorBgContainer, borderRadiusLG})=>{
    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };
    const submitAPI = function(formData) {
        return true;
    };

    const initialState = {availableTimes:  fetchAPI(new Date())}
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date(date))}
    }

    const navigate = useNavigate();
    function submitForm (formData) {
        console.log(formData)
        if (submitAPI(formData)) {
            navigate("/confirmed")
        }
    }


    return(
        <Content
            style={{
                padding: '0 48px',
                marginTop: '20px',
                height: 'auto',
            }}
        >
            <div
                style={{
                    padding: 24,
                    minHeight: 380,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                <Routes >
                    <Route path={'/'} element={<HomePage />} />
                    <Route path="/reserve" element={<Reserve availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>}/>
                    <Route path={'/confirmed'} element={<Confirmed />} />

                </Routes>
            </div>
        </Content>
    )
}

export default MyContent