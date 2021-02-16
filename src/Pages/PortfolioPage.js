import React from 'react';
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import Title from '../Components/Title';
import portfolio from '../Components/allPortfolio';
import { useState } from 'react';

const allCategories = ['All', ...new Set(portfolio.map(item => item.category))];

function PortfolioPage() {
    const [categories, /*setCategories*/] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolio);

    const filter = (category) =>{
        if(category === 'All'){
            setMenuItems(portfolio)
            return;
        }
        const filteredData  = portfolio.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (
        <div className="PortfolioPage">
            <div className="title">
                <Title title={'Portfolio'} span={'portfolio'} />
            </div>
            <div className="portfolio-data">
                <Categories filter={filter} categories={categories} />
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}

export default PortfolioPage;