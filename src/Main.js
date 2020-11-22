import React, { Component } from 'react';
import {Route,NavLink,HashRouter} from 'react-router-dom';
import Home from './Home';
import Stuff from './Stuff';
import Contacts from './Contacts';

export default class Main extends Component {
    render() {
        return (
            <HashRouter> {/* Компонент HashRouter создает основу для навигации и обработки
            истории браузера, из которой состоит маршутизация. */}
            <div>
                <h1>Простое SPA-приложение</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Главная</NavLink></li>
                    <li><NavLink to='/stuff'>Список</NavLink></li>
                    <li><NavLink to='/contacts'>Контакты</NavLink></li>
                    {/* Проще говоря, to это и сам URL и индефикатор для правильного отображения контента */}
                </ul>

                <div className="content">
                    {/* Route способен визуализировать компоненты, а благодаря path,
                    даётся возможность визуализировать контент благодаря NavLink */}
                    <Route exact path="/" component={Home}/>{/* Свойство exact гарантирует, что компонент 
                    Route активен только в том случае, если путь к контенту
                     точно соответсвует указанному в коде */}
                    <Route path="/stuff" component={Stuff}/>
                    <Route path="/contacts" component={Contacts}/>
                </div>
            </div>
            </HashRouter>
        )
    }
}
