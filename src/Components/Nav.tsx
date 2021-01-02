import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import logo from "../assets/images/logo.svg";
import {Link} from "react-router-dom";

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
    return (
        <NavStyles>
            <Link className="logo" to="/">
                <img src={logo} alt=""/>
            </Link>
            <div className="search">
                <div className="input-box">
                    <input type="text" required/>
                    <span className="input-span"></span>
                </div>
                <button>Search</button>
            </div>
        </NavStyles>
    )
}

export {Nav};
