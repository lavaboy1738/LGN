import React, {useState} from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import {fetchSearchedGames} from "../redux/actions/gamesAction";
import {useDispatch} from "react-redux";

const NavStyles = styled.nav`
    padding: 2vw 4vw 0 4vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo{
        height: 3rem;
        cursor: pointer;
        img{
            height: 100%;
            display: block;
        }
    }
    .search{
        display: flex;
        .input-box{
            width: 15rem;
            margin-right: 1rem;
            position: relative;
            overflow: hidden;
            input{
                width: 100%;
                height: 100%;
                font-size: 1rem;
                font-family: Jakarta-display;
                font-weight: 600;
                border: none;
                border-bottom: 1px solid rgba(0,0,0,0.4);
                outline: none;
                padding: 0 1rem;
                border-radius: 0;
                &:focus + .input-span, &:valid + .input-span{
                    transform: translateX(0%);
                    transition: 0.3s all ease-out;
                }
            }
            .input-span{
                position: absolute;
                left: 0;
                bottom: 0;
                transform: translateX(-120%);
                width: 100%;
                height: 2px;
                background-color: black;
                transition: 0.3s all ease-out;
            }
        }
        button{
            font-size: 1rem;
            border: none;
            padding: 0.5rem 2rem;
            background-color: #f6c9a0;
            color: black;
            font-family: Jakarta-text;
            font-weight: 200;
            border-radius: 10px;
            outline: none;
            transition: 0.3s all ease-out 0.1s;
            cursor: pointer;
            &:hover{
                background-color: black;
                color: #f6c9a0;
                transition: 0.3s all ease-out 0.1s;
            }
        }
    }

`

const Nav = ()=>{
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setTextInput((e.target as HTMLInputElement).value)
    }

    const submitSearch = (e: React.FormEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        dispatch(fetchSearchedGames(textInput));
        setTextInput("");
    }

    const clearSearched = ()=>{
        dispatch({type: "CLEAR_SEARCHED"});
    }

    return (
        <NavStyles>
            <div className="logo" onClick={clearSearched}>
                <img src={logo} alt=""/>
            </div>
            <form className="search">
                <div className="input-box">
                    <input value={textInput} onChange={inputHandler} type="text" required/>
                    <span className="input-span"></span>
                </div>
                <button type="submit" onClick={submitSearch} >Search</button>
            </form>
        </NavStyles>
    )
}

export {Nav};
